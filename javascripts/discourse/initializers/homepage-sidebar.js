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
                const main = document.getElementById("main");
                if (isHomepage) {
                    applicationController.set("showSidebar", false);
                    main.classList.add("isHomepage");
                } else {
                    applicationController.set("showSidebar", true);
                    main.classList.remove("isHomepage");
                }
            });
        });
    },
};