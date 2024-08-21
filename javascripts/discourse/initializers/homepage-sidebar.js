import { withPluginApi } from "discourse/lib/plugin-api";
import { defaultHomepage } from "discourse/lib/utilities";

export default {
    name: "custom-settings",
    initialize() {
        withPluginApi("0.8.18", (api) => {
            api.onPageChange(() => {
                const currentRoute = api.container.lookup("router:main").currentRouteName;
                const isHomepage = currentRoute === `discovery.${defaultHomepage()}`;
                const applicationController = api.container.lookup("controller:application");
                const mainOutlet = document.getElementById("main-outlet");
                const sideBar = document.getElementsByClassName("sidebar-sections")[0];
                if (isHomepage) {
                    applicationController.set("showSidebar", false);
                    mainOutlet.classList.add("isHomepage");
                    sideBar.classList.add("isHomepage");
                } else {
                    applicationController.set("showSidebar", true);
                    mainOutlet.classList.remove("isHomepage");
                    sideBar.classList.remove("isHomepage");
                }
            });
        });
    },
};
