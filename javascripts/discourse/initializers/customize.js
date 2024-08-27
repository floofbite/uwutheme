import { withPluginApi } from "discourse/lib/plugin-api";
import { defaultHomepage } from "discourse/lib/utilities";
import I18n from "discourse-i18n";

export default {
    name: "custom-settings",
    initialize() {
        withPluginApi("0.8.18", (api) => {
            api.onPageChange(() => {
                const currentRoute = api.container.lookup("router:main").currentRouteName;
                const isHomepage = currentRoute === `discovery.${defaultHomepage()}`;
                const applicationController = api.container.lookup("controller:application");
                const main = document.getElementById("main");
                const domain = window.location.origin;
                main.classList.add("discourse-theme--q");
                if (isHomepage) {
                    applicationController.set("showSidebar", false);
                    main.classList.add("isHomepage");
                    const loadLatestTopics = async () => {
                        const response = await fetch(`${domain}/latest.json`);
                        const data = await response.json();
                        const topics = data.topic_list.topics;
                        if (topics) {
                            const featureListWrapper = document.getElementsByClassName("featured-lists__wrapper")[0];
                            const featureListContainer = document.getElementsByClassName("featured-lists__list-container")[0];
                            const featureListHeader = document.getElementsByClassName("featured-lists__list-header")[0];
                            featureListWrapper.classList.add("full-width");
                            featureListContainer.classList.add("contents");
                            const featureListHeaderButton = featureListHeader.querySelector("button");
                            const featureListHeaderTitle = featureListHeader.querySelector("h2");
                            const featureListHeaderLink = featureListHeader.querySelector("a");
                            featureListHeaderTitle.innerText = I18n.t(themePrefix("features_list.latest.status"));
                            featureListHeaderLink.innerText = I18n.t(themePrefix("features_list.latest.all"));
                            featureListHeaderButton.innerHTML =  I18n.t(themePrefix("features_list.latest.new"));
                        }
                    }
                    const updateLangs = () => {
                        //search block
                        const searchTitle = document.querySelector(".custom-search-banner-wrap")[0].querySelector("h1");
                        searchTitle.innerText = I18n.t(themePrefix("search_banner.title"));
                        const searchSubTitle = document.querySelector(".custom-search-banner-wrap")[0].querySelector("p");
                        searchSubTitle.innerText = I18n.t(themePrefix("search_banner.subtitle"));

                    }
                    loadLatestTopics();
                    updateLangs();
                } else {
                    applicationController.set("showSidebar", true);
                    main.classList.remove("isHomepage");
                }

                const siteStatus = document.getElementById("siteStatus");
                if (domain === "https://community.qnap.com") {
                    siteStatus.innerText = "Beta";
                } else {
                    siteStatus.innerText = "Testing";
                }

            });
        });
    },
};
