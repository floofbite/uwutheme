import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(), // 确保能使用 store 服务
    async didInsertElement() {
        this._super(...arguments);

        const locale = I18n.currentLocale();
        const isProd = window.location.origin === "https://community.qnap.com";
        const listLength = 10;

        // 定义 category 相关的设置，包括 category_id 和要排除的类别
        const categorySettings = {
            "ja": {
                category_id: isProd ? 51 : 18,
                excludeCategories: []
            },
            "zh_TW": {
                category_id: isProd ? 52 : 30,
                excludeCategories: []
            },
            "default": {
                category_id: 0,
                excludeCategories: isProd ? [51, 52] : [18, 30]
            }
        };

        // 根据 locale 获取当前的设置
        const { category_id, excludeCategories } = categorySettings[locale] || categorySettings["default"];

        let filteredTopics = [];

        try {
            // 等待异步请求返回数据
            const topicList = await this.store.findFiltered("topicList", {
                filter: "latest",
                params: {
                    order: "activity",
                    category: category_id,
                },
            });

            if (topicList && topicList.topics) {
                filteredTopics = topicList.topics;

                // 如果有需要排除的 category_id，执行过滤
                if (excludeCategories.length > 0) {
                    filteredTopics = filteredTopics.filter(topic => !excludeCategories.includes(topic.category_id));
                }

                filteredTopics = filteredTopics.slice(0, listLength);
            }
        } catch (error) {
            console.error("Error fetching topics:", error);
        }

        this.set("filteredTopics", filteredTopics);

        const newTopics = await this.store.find("topic", {
            order: "created",
            limit: listLength,
            category_id: category_id,
        });

        this.set("newTopics", newTopics);
    }
});
