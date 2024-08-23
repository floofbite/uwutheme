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
                main.classList.add("discourse-theme--q");
                if (isHomepage) {
                    applicationController.set("showSidebar", false);
                    main.classList.add("isHomepage");

                    console.log('isHomepage start!');
                    const featureListWrapper = document.getElementsByClassName("featured-lists__wrapper")[0];
                    const featureListContainer = document.getElementsByClassName("featured-lists__list-container")[0];
                    const featureListHeader = document.getElementsByClassName("featured-lists__list-header")[0];

                    if (featureListWrapper) {
                        featureListWrapper.classList.add("full-width");
                    }

                    if (featureListContainer) {
                        featureListContainer.classList.add("contents");
                    }

                    if (featureListHeader) {
                        const featureListHeaderButton = featureListHeader.querySelector("button");
                        const featureListHeaderTitle = featureListHeader.querySelector("h2");
                        const featureListHeaderLink = featureListHeader.querySelector("a");
                        if (featureListHeaderTitle) {
                            featureListHeaderTitle.innerText = "Latest";
                        }

                        if (featureListHeaderLink) {
                            featureListHeaderLink.innerText = "All Topics";
                        }

                        if (featureListHeaderButton) {
                            featureListHeaderButton.innerHTML = '<svg class="fa d-icon d-icon-plus svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use href="#plus"></use></svg> <span class="d-button-label">New Topic</span>';
                        }
                    }
                    console.log('isHomepage end!');

                } else {
                    applicationController.set("showSidebar", true);
                    main.classList.remove("isHomepage");
                }

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
