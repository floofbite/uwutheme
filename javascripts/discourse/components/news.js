import Component from '@ember/component';
import { ajax } from 'discourse/lib/ajax';

export default Component.extend({
    didInsertElement() {
        this._super(...arguments);
        const lang = I18n.currentLocale().toLowerCase();
        if (lang.indexOf('_') !== -1) {
            lang = lang.replace('_', '-');
        }
        const apiUrl = 'https://www.qnap.com/api/v1/articles/news?locale='+lang;

        ajax(apiUrl, {
            method: 'GET'
        }).then((data) => {
            let news = data.data;
            news.sort((a, b) => new Date(b.date) - new Date(a.date));
            news.splice(3);
            this.set('news', news);
        }).catch((error) => {
            console.error('Error fetching:', error);
        });
    }
});
