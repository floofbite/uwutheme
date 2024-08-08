import Component from '@ember/component';
import { ajax } from 'discourse/lib/ajax';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);

      const apiUrl = 'https://testing-community.qnap.com.tw/categories.json';

      ajax(apiUrl, {
        method: 'GET'
      }).then((data) => {
        const categories = data.category_list.categories;
        const visibleCategories = categories.filter(category => !category.read_restricted);

        // Set filtered categories data to the component
        this.set('categories', visibleCategories);
      }).catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }
});
