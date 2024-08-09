import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "custom-sidebar-visibility",
  initialize() {
    withPluginApi("0.8.18", (api) => {
      api.onPageChange(() => {
        const currentRoute = api.container.lookup("router:main").currentRouteName;
        const isHomepage = currentRoute === `discovery.${api.container.lookup("route:application").defaultHomepage()}`;
        const sidebarElement = document.querySelector(".sidebar");

        if (isHomepage && sidebarElement) {
          sidebarElement.style.display = "none"; // Hide the sidebar on the homepage
        } else if (sidebarElement) {
          sidebarElement.style.display = ""; // Show the sidebar on other pages
        }
      });
    });
  },
};
