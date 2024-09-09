import {withPluginApi} from "discourse/lib/plugin-api";
import {defaultHomepage} from "discourse/lib/utilities";

export default {
    name: "translation",
    initialize() {
        withPluginApi("0.8.18", (api) => {
            api.onPageChange(() => {
                I18n.translations[I18n.currentLocale()].js.login.oauth2_basic.name = 'QNAP ID';
            });
        });
    },
};
