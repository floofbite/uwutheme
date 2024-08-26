import Component from "@ember/component";

export default Component.extend({
    async didInsertElement() {
      const siteLang = document.documentElement.getAttribute("lang").toLowerCase();

      // 使用 themeUpload helper 获取正确的 URL
      const jsonFilePath = themeUpload(`/json/${siteLang}.json`);

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
