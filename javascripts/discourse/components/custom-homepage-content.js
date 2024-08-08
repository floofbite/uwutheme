import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { defaultHomepage, getCurrentUser } from "discourse/lib/utilities";

export default class CustomHomepageContent extends Component {
    @service router;

    get isHomepage() {
        const { currentRouteName } = this.router;

        return currentRouteName === `discovery.${defaultHomepage()}`;
    }

    get isUserLoggedIn() {
        return getCurrentUser() !== null;
    }
}