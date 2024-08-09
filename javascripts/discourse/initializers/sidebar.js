import { withPluginApi } from "discourse/lib/plugin-api";
import { defaultHomepage } from "discourse/lib/utilities";

export default {
  name: "custom-sidebar-visibility",
  initialize() {
    withPluginApi("0.8.18", (api) => {
      api.onPageChange(() => {
        const currentRoute = api.container.lookup("router:main").currentRouteName;
        const isHomepage = currentRoute === `discovery.${defaultHomepage()}`;
        const applicationController = api.container.lookup("controller:application");

        console.log("Is homepage:", isHomepage);

        if (isHomepage) {
            applicationController.set("showSidebar", false);
        } else {
            applicationController.set("showSidebar", true);
        }
      });
    });
  },
};
