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
            if (this.isHomepage) {
                const applicationController = this.api.container.lookup("controller:application");
                applicationController.set("showSidebar", false);
            }else{
                const applicationController = this.api.container.lookup("controller:application");
                applicationController.set("showSidebar", true);
            }
        });
    }

    get isHomepage() {
        const { currentRouteName } = this.router;
        return currentRouteName === `discovery.${defaultHomepage()}`;
    }

    get isUserLoggedIn() {
        return this.api?.getCurrentUser() !== null;
    }
}
