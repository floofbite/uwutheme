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

                if (isHomepage) {
                    applicationController.set("showSidebar", false);
                    const siteApiUrl = '/site/statistics.json';
                    const mainOutlet = document.getElementById("main-outlet");
                    mainOutlet.classList.add("isHomepage");
                    ajax(siteApiUrl, {
                        method: 'GET'
                    }).then((data) => {
                        const statusContent = document.querySelector(".status-content");
                        statusContent.classList.remove("d-none");
                        const searchMenu = document.querySelector(".search-menu");
                        searchMenu.insertAdjacentHTML("afterend", statusContent.outerHTML);
                        statusContent.remove();
                    }).catch((error) => {
                        console.error('Failed to fetch site statistics', error);
                    });
                } else {
                    applicationController.set("showSidebar", true);
                }
            });
        });
    },
};
