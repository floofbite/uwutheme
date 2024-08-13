const router = require('discourse/routes/router').default;

export default {
    name: 'aboutPageButtonLinkChange',

    initialize() {
        router.on('didTransition', () => {
            this.changeButtonLinkOnAboutPage();
        });
    },

    changeButtonLinkOnAboutPage() {
        if (Discourse.Route.current().name === 'about') {
            console.log('About page detected!');
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
    }
};
