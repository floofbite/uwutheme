import Component from "@ember/component";
import i18n from 'discourse-common/helpers/i18n';

const themePrefix = 'discourse-theme-custom.'; // Define your theme prefix here

export default Component.extend({
    didInsertElement() {
        const cardsData = i18n(themePrefix + 'cards');
        console.log(cardsData);

        this.set("cards", cardsData);
    }
});