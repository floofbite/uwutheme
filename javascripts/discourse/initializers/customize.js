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
                            featureListWrapper.classList.add("full-width");
                            featureListContainer.classList.add("contents");
                        }
                        updateLangs();
                    }
                    const updateLangs = () => {
                        const langUpdate = [
                            { wrap: ".featured-lists__list-header", selector: "h2", content: I18n.t(themePrefix("features_list.latest.status")) },
                            { wrap: ".featured-lists__list-header", selector: "a", content: I18n.t(themePrefix("features_list.latest.all")) },
                            { wrap: ".featured-lists__list-header", selector: "button", content: I18n.t(themePrefix("features_list.latest.new")) },
                            { wrap: ".custom-search-banner-wrap", selector: "h1", content: I18n.t(themePrefix("search_banner.title")) },
                            { wrap: ".custom-search-banner-wrap", selector: "p", content: I18n.t(themePrefix("search_banner.subtitle")) },
                        ];

                        langUpdate.forEach(({ wrap, selector, content }) => {
                            const wrapperElement = document.querySelector(wrap);
                            if (wrapperElement) {
                                const element = wrapperElement.querySelector(selector);
                                if (element) {
                                    element.textContent = content; // Use textContent for safer updates if content is plain text
                                }
                            }
                        });
                    }
                    loadLatestTopics();
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
