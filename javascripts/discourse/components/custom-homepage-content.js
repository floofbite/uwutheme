import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { defaultHomepage } from "discourse/lib/utilities";
import { withPluginApi } from "discourse/lib/plugin-api";
import { action } from "@ember/object";

export default class CustomHomepageContent extends Component {
  @service router;

  constructor() {
    super(...arguments);

    withPluginApi("0.8.18", (api) => {
      this.api = api;
      this.setupSidebarVisibility();
    });
  }

  get isHomepage() {
    const { currentRouteName } = this.router;
    return currentRouteName === `discovery.${defaultHomepage()}`;
  }

  get isUserLoggedIn() {
    return this.api?.getCurrentUser() !== null;
  }

  @action
  setupSidebarVisibility() {
    const sidebarElement = document.querySelector('.sidebar'); // Adjust the selector as needed

    if (this.isHomepage && sidebarElement) {
      sidebarElement.style.display = 'none'; // Hide the sidebar on the homepage
    } else if (sidebarElement) {
      sidebarElement.style.display = ''; // Show the sidebar on other pages
    }
  }

  willRender() {
    this.setupSidebarVisibility();
  }
}
