import Component from '@ember/component';
// import { ajax } from 'discourse/lib/ajax';
import TopicList from 'discourse/components/topic-list';
export default Component.extend({
    didInsertElement() {
        this._super(...arguments);
        let filteredTopics = [];
        const topicList = await this.store.findFiltered('topicList', {
            // filter: this.args.list.filter,
            params: {
                order: 'activity',
                category: 31,
                // tags: this.args.list.tag,
                // solved: solvedFilter,
            },
        });

        if (topicList.topics) {
            filteredTopics = (topicList.topics.slice(
                0,
                this.args.list.length,
            ));
        }

        this.set('filteredTopics', filteredTopics);
    }
});
