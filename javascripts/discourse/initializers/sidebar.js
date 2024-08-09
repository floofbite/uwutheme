import { withPluginApi } from "discourse/lib/plugin-api";
import { defaultHomepage } from "discourse/lib/utilities";

export default {
    name: "custom-sidebar-visibility",
    initialize() {
        withPluginApi("0.8.18", (api) => {
            //on page load
            api.onPageChange(() => {
                const currentRoute = api.container.lookup("router:main").currentRouteName;
                const isHomepage = currentRoute === `discovery.${defaultHomepage()}`;
                const applicationController = api.container.lookup("controller:application");

                if (isHomepage) {
                    applicationController.set("showSidebar", false);
                    const checkExist = setInterval(() => {
                        if (document.querySelector('.status-content')) {
                            clearInterval(checkExist);
                            const statusContent = document.querySelector(".status-content");
                            const searchMenu = document.querySelector(".search-menu");
                            searchMenu.insertAdjacentHTML("afterend", statusContent.outerHTML);
                            statusContent.remove();
                        }
                    }, 1000);
                } else {
                    applicationController.set("showSidebar", true);
                }
            });
        });
    },
};
