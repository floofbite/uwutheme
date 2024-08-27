import Component from "@ember/component";
import I18n from "I18n";

export default Component.extend({
    get cardsContent() {
        return I18n.t(themePrefix("cards"), {
            topicUrl: this.category.topic_url,
        });
    }
});
