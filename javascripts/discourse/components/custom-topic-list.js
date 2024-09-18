import Component from '@ember/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Category from 'discourse/models/category';
export default class CustomTopicList extends Component {
    @service store;
    @service router;
    @service composer;
    @service currentUser;

    async didInsertElement() {
        super.didInsertElement(...arguments);
        const locale = I18n.currentLocale();
        const isProd = window.location.origin === "https://community.qnap.com";
        const listLength = 10;

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
                category_id: isProd ? 4 : 16, //set general
                excludeCategories: isProd ? [51, 52] : [18, 30]
            }
        };

        const { category_id, excludeCategories } = categorySettings[locale] || categorySettings["default"];

        let filteredTopics = [];

        try {
            const topicList = await this.store.findFiltered("topicList", {
                filter: "latest",
                params: {
                    order: "activity",
                    category: category_id,
                },
            });

            if (topicList && topicList.topics) {
                filteredTopics = topicList.topics;

                if (excludeCategories.length > 0) {
                    filteredTopics = filteredTopics.filter(topic => !excludeCategories.includes(topic.category_id));
                }

                filteredTopics = filteredTopics.slice(0, listLength);
            }

            this.set('categoryId', categorySettings[locale] ? category_id : categorySettings["default"].category_id);

        } catch (error) {
            console.error("Error fetching topics:", error);
        }

        this.set('filteredTopics', filteredTopics);
    }

    @action
    async createTopic() {
        try {
            if (this.currentUser) {
                await this.store.findRecord('category', this.get('categoryId')).then((category) => {
                    this.composer.openNewTopic({
                        categoryId: category.id,
                        label: 'topic.create',
                        preferDraft: 'true',
                    });
                });
            } else {
                this.showLogin();
            }
        } catch (error) {
            console.error('Failed to fetch category:', error);
        }
    }

    @action
    showLogin() {
        this.router.transitionTo('login');
    }
}