import Component from "@ember/component";
import { I18n } from "discourse/lib/i18n";

export default Component.extend({
    didInsertElement() {
        const cardsData = I18n.t("cards");

        this.set("cards", cardsData);
    }
});