import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),  // 确保能使用 store 服务
    async didInsertElement() {
        this._super(...arguments);
        let filteredTopics = [];
        let listLength = 10;

        try {
            // 等待异步请求返回数据
            const topicList = await this.store.findFiltered('topicList', {
                filter: 'latest',
                params: {
                    order: 'activity',
                    category: 30,
                },
            });

            console.log(topicList);

            // 如果 topics 存在，进行 slicing
            if (topicList && topicList.topics) {
                filteredTopics = topicList.topics.slice(0, listLength);
            }
        } catch (error) {
            console.error('Error fetching topics:', error);
        }

        console.log(1111);
        this.set('filteredTopics', filteredTopics);
    }
});
