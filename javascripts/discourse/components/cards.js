import Component from "@ember/component";

export default Component.extend({
    didInsertElement() {
        const cardsData = [
            {
                "url": "https://blog.qnap.com/en/",
                "target": "_blank",
                "title": "Blog",
                "description": "Stay tuned for blog posts about QNAP's products and technologies.",
                "icon":"/assets/images/icon-blog.svg"
            },
            {
                "url": "https://www.qnap.com/en/how-to/search",
                "target": "_blank",
                "title": "Knowledge Base",
                "description": "Explore guides, tutorials, and expert tips to get the most out of your QNAP products.",
                "icon":"/assets/images/icon-knowledge.svg"
            },
            {
                "url": "https://www.qnap.com/en/release-notes/",
                "target": "_blank",
                "title": "Release Notes",
                "description": "Discover the latest features, improvements, and bug fixes in our most recent releases.",
                "icon":"/assets/images/icon-release.svg"
            }
        ];

        this.set("cards", cardsData);
    }
});