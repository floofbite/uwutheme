import Component from '@ember/component';
import { ajax } from 'discourse/lib/ajax';

export default Component.extend({
    didInsertElement() {
        this._super(...arguments);

        const apiUrl = '/categories.json';

        ajax(apiUrl, {
            method: 'GET'
        }).then((data) => {
            const categories = data.category_list.categories;
            const visibleCategories = categories.filter(category => !category.read_restricted);
            // visibleCategories get slug put in langsReplaceByI18n
            // const langsReplaceByI18n = [
            //     { slug: "" , title: I18n.t(themePrefix("category.general.title")), description: I18n.t(themePrefix("category.general.description")) },
            // ];
            const langsReplaceByI18n = [];
            visibleCategories.forEach(category => {
                let slug = category.slug;
                if (slug.indexOf('-') !== -1) {
                    slug = slug.replace(/-/g, '_');
                }
                langsReplaceByI18n.push({
                    slug: slug,
                    name: I18n.t(themePrefix("category." + slug + ".name")),
                    description:  I18n.t(themePrefix("category." + slug + ".description")),
                    uploaded_logo: category.uploaded_logo,
                    id: category.id
                });
            });

            this.set('categories', langsReplaceByI18n);
            // this.set('categories', visibleCategories);
        }).catch((error) => {
            console.error('Error fetching categories:', error);
        });
    }
});
