import Component from "@ember/component";

export default Component.extend({
  async didInsertElement() {
    const siteLang = document.documentElement.getAttribute("lang").toLowerCase();

    try {
      const response = await fetch(`/discourse-theme-custom/assets/${siteLang}.json`);

      if (response.ok) {
        const langJson = await response.json();
        const cardsData = langJson.cards;
        this.set("cards", cardsData);
      } else {
        console.error("error fetching language JSON file", `/discourse-theme-custom/assets/${siteLang}.json`);
      }
    } catch (error) {
      console.error("获取语言 JSON 文件时出错:", error);
    }
  }
});
