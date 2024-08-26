import Component from "@ember/component";
import { getOwner } from "@ember/application";

export default Component.extend({
  async didInsertElement() {
    const siteLang = document.documentElement.getAttribute("lang").toLowerCase();

    // 使用 getOwner 获取主题上传的前缀
    const themePrefix = getOwner(this).resolveRegistration('config:theme-settings')['theme_uploads_prefix'];
    const jsonFilePath = `${themePrefix}/json/${siteLang}.json`;

    try {
      const response = await fetch(jsonFilePath);

      if (response.ok) {
        const langJson = await response.json();
        const cardsData = langJson.cards;

        this.set("cards", cardsData);
      } else {
        console.error("无法加载语言 JSON 文件");
      }
    } catch (error) {
      console.error("获取语言 JSON 文件时出错:", error);
    }
  }
});
