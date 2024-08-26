import Component from "@ember/component";
import themePrefix from "discourse/helpers/theme-prefix";

export default Component.extend({
  async didInsertElement() {
    const siteLang = document.documentElement.getAttribute("lang").toLowerCase();

    const jsonFilePath = `${themePrefix}/assets/${siteLang}.json`;

    try {
      const response = await fetch(jsonFilePath);

      if (response.ok) {
        const langJson = await response.json();
        const cardsData = langJson.cards;
        this.set("cards", cardsData);
      } else {
        console.error("error fetching language JSON file", `${themePrefix}/assets/json/${siteLang}.json`);
      }
    } catch (error) {
      console.error("获取语言 JSON 文件时出错:", error);
    }
  }
});
