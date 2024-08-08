import Component from '@ember/component';
import { ajax } from 'discourse/lib/ajax';

export default Component.extend({
    didInsertElement() {
        this._super(...arguments);
        const siteApiUrl = 'https://testing-community.qnap.com.tw/site/statistics.json';
        ajax(siteApiUrl, {
            method: 'GET'
        }).then((data) => {
            const userCount = data.users_count;
            const postsCount = data.posts_count;
            this.set('userCount', userCount);
            this.set('postsCount', postsCount);
        }).catch((error) => {
            console.error('Failed to fetch site statistics', error);
        });
    }
});