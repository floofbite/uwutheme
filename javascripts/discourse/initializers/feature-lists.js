import { withPluginApi } from "discourse/lib/plugin-api";
import { defaultHomepage } from "discourse/lib/utilities";

export default {
    name: "homepage--feature-list",
    initialize() {
        withPluginApi("0.8.18", (api) => {
            api.onPageChange(() => {
                const isHomepage = currentRoute === `discovery.${defaultHomepage()}`;
                const language = I18n.locale;
                if (isHomepage) {
                    const featureListLatest = document.querySelector(".feature-list-latest");
                    featureListLatest.style.display = "none";
                    this.showFeatureListLatest(language);
                }
            });
        });
    },

    showFeatureListLatest(language) {
        console.log("language: ", language);
        switch (language) {
            case "zh_TW":
                document.querySelector(".feature-list-latest--zh-tw").style.display = "block";
                break;
            case "ja":
                document.querySelector(".feature-list-latest--ja").style.display = "block";
                break;
            default:
                document.querySelector(".feature-list-latest--all").style.display = "block";
                const rows = document.querySelectorAll('.feature-list-latest--all tr');

                rows.forEach((row, index) => {
                    if (index >= 10) {
                        row.remove();
                    }
                });
                break;
        }
    }
};
