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
  handleHomepageClass() {
    if (this.isHomepage) {
      document.body.classList.add("homepage");
    } else {
      document.body.classList.remove("homepage");
    }
  }

  @action
  setupSidebarVisibility() {
    const applicationController = this.api.container.lookup("controller:application");

    // Hide sidebar on homepage and show it on other pages
    applicationController.set("showSidebar", !this.isHomepage);
  }

  willRender() {
    this.handleHomepageClass();
    this.setupSidebarVisibility();
  }
}
