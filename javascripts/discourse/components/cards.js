import Component from "@ember/component";
import I18n from "discourse-i18n";

export default Component.extend({
    didInsertElement() {
        const themePrefix = 'discourse-theme-custom';
        const translationKey = `theme_translations.${themePrefix}.qnap_content.cards`;

        // Ensure translations are loaded
        if (I18n.translations && I18n.translations.en && I18n.translations.en.theme_translations) {
            console.log(I18n.translations.en.theme_translations);
        } else {
            console.error("Translations not loaded or path is incorrect");
        }

        const cardsData = I18n.t(translationKey);
        console.log(cardsData);
        this.set("cards", cardsData);
    }
});