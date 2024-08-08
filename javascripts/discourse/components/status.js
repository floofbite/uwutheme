import Component from '@ember/component';
import { ajax } from 'discourse/lib/ajax';

export default Component.extend({
    didInsertElement() {
        this._super(...arguments);
        const dailyUserCountApiUrl = 'https://testing-community.qnap.com.tw/directory_items.json?period=daily&order=topic_count';
        ajax(dailyUserCountApiUrl, {
            method: 'GET'
        }).then((data) => {
            const dailyUserCount = data.directory_items.length;
            this.set('dailyUserCount', dailyUserCount);
        }).catch((error) => {
            console.error('Error fetching users:', error);
        });

        const postsCountApiUrl = 'https://testing-community.qnap.com.tw/categories.json';
        ajax(postsCountApiUrl, {
            method: 'GET'
        }).then((data) => {
            const categories = data.category_list.categories;
            const visibleCategories = categories.filter(category => !category.read_restricted);
            const countPostsNumber = visibleCategories.map(category => category.post_count);
            const postsCount = countPostsNumber.reduce((a, b) => a + b, 0);

            this.set('postsCount', postsCount);
        }).catch((error) => {
            console.error('Error fetching categories:', error);
        });
    }
});