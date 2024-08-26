import Component from "@ember/component";
import { getOwner } from "@ember/application";

export default Component.extend({
    async didInsertElement() {
        const siteLang = document.documentElement.getAttribute("lang").toLowerCase();

        const themeSettings = getOwner(this).resolveRegistration('config:theme-settings');

        if (themeSettings) {
            const themePrefix = themeSettings.theme_uploads_prefix;
            const jsonFilePath = `${themePrefix}/json/${siteLang}.json`;

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
        } else {
            console.error('Theme settings are not correctly registered.');
        }
    }
});
