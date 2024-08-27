import Component from "@ember/component";
import I18n from "discourse-i18n";

export default Component.extend({
    didInsertElement() {
        const cardsData = I18n.t(themePrefix("qnap_content.cards"));
        console.log(cardsData);
        this.set("cards", cardsData);
    }
});

