import Component from "@ember/component";
import I18n from "I18n";

export default Component.extend({
    didInsertElement() {
        const cardsData = [
            {
                "url": "https://blog.qnap.com/en/",
                "target": "_blank",
                "title": "Blog",
                "description": "Stay tuned for blog posts about QNAP's products and technologies.",
                "icon": "blogLogo"
            },
            {
                "url": "https://www.qnap.com/en/how-to/search",
                "target": "_blank",
                "title": "Knowledge Base",
                "description": "Explore guides, tutorials, and expert tips to get the most out of your QNAP products.",
                "icon": "knowledgeLogo"
            },
            {
                "url": "https://www.qnap.com/en/release-notes/",
                "target": "_blank",
                "title": "Release Notes",
                "description": "Discover the latest features, improvements, and bug fixes in our most recent releases.",
                "icon": "releaseLogo"
            }
        ];

        console.log(I18n.t("theme_translations.discourse-theme-custom.cards"));

        this.set("cards", cardsData);
    }
});