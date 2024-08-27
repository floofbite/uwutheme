import Component from "@ember/component";
import I18n from "discourse-i18n";

export default Component.extend({
    didInsertElement() {
        const themePrefix = 'discourse-theme-custom';
        const translationKey = `theme_translations.${themePrefix}.qnap_content.test`;
        const cardsData = I18n.t(translationKey);

        console.log(cardsData);
        this.set("cards", cardsData);
    }
});

