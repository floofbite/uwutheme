import Component from '@ember/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

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
                category_id: 0,
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
        } catch (error) {
            console.error("Error fetching topics:", error);
        }

        this.filteredTopics = filteredTopics;
        this.set('categoryId', category_id);
    }

    @action
    createTopic() {
        if (this.currentUser) {
            this.composer.openNewTopic({
                categoryId: this.get('categoryId'),
                label: 'topic.create',
                preferDraft: 'true',
            });
        } else {
            this.showLogin();
        }
    }

    @action
    showLogin() {
        this.router.transitionTo('login');
    }
}
