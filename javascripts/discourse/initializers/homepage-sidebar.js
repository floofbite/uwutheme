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
                const main = document.getElementById("main");
                if (isHomepage) {
                    applicationController.set("showSidebar", false);
                    main.classList.add("isHomepage");
                    window.scrollTo(0, document.body.scrollHeight);
                    const listControls = document.querySelector("a.list-controls");
                    const listContainer = document.querySelector(".container.list-container");
                    if (listControls) {
                        listControls.style.display = "none";
                    }
                    if (listContainer) {
                        listContainer.style.display = "none";
                    }
                } else {
                    applicationController.set("showSidebar", true);
                    main.classList.remove("isHomepage");
                }
                main.classList.add("discourse-theme--q");
                const siteStatus = document.getElementById("siteStatus");
                if (window.location.origin === "https://community.qnap.com") {
                    siteStatus.innerText = "Beta";
                } else {
                    siteStatus.innerText = "Testing";
                }
            });
        });
    },
};
