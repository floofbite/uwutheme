import { withPluginApi } from "discourse/lib/plugin-api";

export default {
    name: 'aboutPageButtonLinkChange',

    initialize() {
        let aboutButtonListenerInitialized = false;
        withPluginApi("0.8.18", (api) => {
            api.onPageChange(() => {
                const currentRoute = api.container.lookup("router:main").currentRouteName;
                const aboutPage = currentRoute === 'about' || currentRoute === 'faq';
                if (aboutPage && !aboutButtonListenerInitialized) {
                    this.changeButtonLinkOnAboutPage();
                    aboutButtonListenerInitialized = true;
                }
            });
        });
    },

    changeButtonLinkOnAboutPage() {
        const tosButton = document.querySelector('a[href="/tos"]');
        const privacyButton = document.querySelector('a[href="/privacy"]');

        if (tosButton) {
            tosButton.addEventListener('click', () => {
                window.location.href = 'https://www.qnap.com/go/legal/qnap-website-terms-of-use';
            });
        }

        if (privacyButton) {
            privacyButton.addEventListener('click', () => {
                window.location.href = 'https://www.qnap.com/go/legal/qnap-privacy-policy';
            });
        }
    }
};
