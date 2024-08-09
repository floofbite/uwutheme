import { withPluginApi } from "discourse/lib/plugin-api";
import { defaultHomepage } from "discourse/lib/utilities";
import { ajax } from "discourse/lib/ajax";

export default {
    name: "custom-settings",
    initialize() {
        withPluginApi("0.8.18", (api) => {
            api.onPageChange(() => {
                const currentRoute = api.container.lookup("router:main").currentRouteName;
                const isHomepage = currentRoute === `discovery.${defaultHomepage()}`;
                const applicationController = api.container.lookup("controller:application");
                const mainOutlet = document.getElementById("main-outlet");

                if (isHomepage) {
                    applicationController.set("showSidebar", false);
                    const siteApiUrl = '/site/statistics.json';
                    mainOutlet.classList.add("isHomepage");
                    ajax(siteApiUrl, {
                        method: 'GET'
                    }).then((data) => {
                        if (!data) {
                            return;
                        }
                        const statusContent = document.querySelector(".status-content");
                        statusContent.classList.remove("default");
                        const searchMenu = document.querySelector(".search-menu");
                        searchMenu.insertAdjacentHTML("afterend", statusContent.outerHTML);
                        statusContent.remove();
                    }).catch((error) => {
                        console.error('Failed to fetch site statistics', error);
                    });
                } else {
                    applicationController.set("showSidebar", true);
                    mainOutlet.classList.remove("isHomepage");
                }
            });
        });
    },
};
