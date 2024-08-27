import Component from "@ember/component";
import I18n from "I18n";

export default Component.extend({
    didInsertElement() {
        const item1 = I18n.lookup("theme_translations.discourse_theme_custom.cards.item1");
        const item2 = I18n.lookup("theme_translations.discourse_theme_custom.cards.item2");
        const item3 = I18n.lookup("theme_translations.discourse_theme_custom.cards.item3");

        const cardsData = [item1, item2, item3];

        console.log(cardsData);
        console.log(I18n.translations.en.theme_translations);

        this.set("cards", cardsData);
    }
});
