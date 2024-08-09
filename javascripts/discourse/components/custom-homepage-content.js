import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { defaultHomepage } from "discourse/lib/utilities";
import { withPluginApi } from "discourse/lib/plugin-api";

export default class CustomHomepageContent extends Component {
    @service router;

    constructor() {
        super(...arguments);

        // Set up the plugin API to get the current user
        withPluginApi('0.8.18', (api) => {
            this.api = api;
        });
    }

    get isHomepage() {
        const { currentRouteName } = this.router;
        return currentRouteName === `discovery.${defaultHomepage()}`;
    }

    get isUserLoggedIn() {
        return this.api?.getCurrentUser() !== null;
    }

    didInsertElement() {
        this._super(...arguments);
        if (this.isHomepage) {
            document.body.classList.add("homepage");
            const applicationController = this.api.container.lookup("controller:application");
            applicationController.set("showSidebar", !isHomepage);
        }
    }
}
