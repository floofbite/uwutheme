import Component from "@ember/component";


export default Component.extend({
    async didInsertElement() {
        const siteLang = document.documentElement.getAttribute("lang").toLowerCase();

        const langJson = await import(`../../../assets/json/${siteLang}.json`);

        const cardsData = langJson.cards;

        this.set("cards", cardsData);
    }
});