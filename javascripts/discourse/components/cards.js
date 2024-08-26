import Component from "@ember/component";
import { themeUpload } from "discourse/lib/theme-settings";

export default Component.extend({
  async didInsertElement() {
    const siteLang = document.documentElement.getAttribute("lang").toLowerCase();

    const jsonFilePath = themeUpload(`/json/${siteLang}.json`);

    try {
      const response = await fetch(jsonFilePath);

      if (response.ok) {
        const langJson = await response.json();
        const cardsData = langJson.cards;
        this.set("cards", cardsData);
      } else {
        console.error("error fetching language JSON file", themeUpload(`/json/${siteLang}.json`));
      }
    } catch (error) {
      console.error("获取语言 JSON 文件时出错:", error);
    }
  }
});
