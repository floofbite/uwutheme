import Component from '@ember/component';
import { ajax } from 'discourse/lib/ajax';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);

      const apiUrl = 'https://www.qnap.com/api/v1/articles/news?locale=en';

      ajax(apiUrl, {
        method: 'GET'
      }).then((data) => {
        const news = data.data;
        news.sort((a, b) => new Date(b.attributes.date) - new Date(a.attributes.date));
        news.splice(3);
        this.set('news', news);
      }).catch((error) => {
        console.error('Error fetching:', error);
      });
  }
});
