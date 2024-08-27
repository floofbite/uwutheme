// import Component from "@ember/component";
// import I18n from 'I18n';

// export default Component.extend({
//     didInsertElement() {
//         const cardsData = I18n.t(themePrefix + 'qnap_content.cards');
//         console.log(cardsData);
//         this.set("cards", cardsData);
//     }
// });
import Component from "@ember/component";
import I18n from "I18n";

export default Component.extend({
  async didInsertElement() {
    const themePrefix = 'discourse-theme-custom'; // Assume you retrieve this dynamically
    const translationKey = `theme_translations.${themePrefix}.qnap_content.cards`;

    // Fetch the array of translated objects
    const cardsData = I18n.t(translationKey);

    // Check if the result is an array
    if (Array.isArray(cardsData)) {
      this.set("cards", cardsData);
    } else {
      console.error("Translation key did not return an array:", cardsData);
    }
  }
});
