import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { defaultHomepage } from "discourse/lib/utilities";
import { withPluginApi } from "discourse/lib/plugin-api";

export default class CustomHomepageContent extends Component {
    @service router;

    get isHomepage() {
        const { currentRouteName } = this.router;
        return currentRouteName === `discovery.${defaultHomepage()}`;
    }

    get isUserLoggedIn() {
        return this.api?.getCurrentUser() !== null;
    }

    get isAfterTopicList() {
        return this.api?.container.lookup("controller:discovery/topics")?.afterTopicList;
    }

    constructor() {
        super(...arguments);

        withPluginApi("0.8.18", (api) => {
            this.api = api;
        });
    }
}