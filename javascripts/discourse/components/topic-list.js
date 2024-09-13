import Component from '@ember/component';
import TopicList from 'discourse/components/topic-list';
export default Component.extend({
    didInsertElement() {
        this._super(...arguments);
        let filteredTopics = [];
        let listLength = 10;
        const topicList = this.store.findFiltered('topicList', {
            filter: 'latest',
            params: {
                order: 'activity',
                category: 30,
                // tags: this.args.list.tag,
                // solved: solvedFilter,
            },
        });
        console.log(topicList);
        if (topicList.topics) {
            console.log(topicList);
            filteredTopics = (topicList.topics.slice(
                0,
                listLength,
            ));
        }
        console.log(1111);
        this.set('filteredTopics', filteredTopics);
    }
});
