import Component from '@ember/component';
import { ajax } from 'discourse/lib/ajax';

export default Component.extend({
    didInsertElement() {
        this._super(...arguments);
        const siteApiUrl = '/site/statistics.json';
        ajax(siteApiUrl, {
            method: 'GET'
        }).then((data) => {
            const usersCount = data.users_count;
            const postsCount = data.posts_count;
            this.set('userCount', usersCount);
            this.set('postsCount', postsCount);
            const statusContent = document.querySelector(".status-content");
            const searchMenu = document.querySelector(".search-menu");
            searchMenu.insertAdjacentHTML("afterend", statusContent.outerHTML);
            let newStatusContent = document.querySelector(".status-content");
            const postsIcon = statusContent.querySelector('.postsIcon');
            const usersIcon = statusContent.querySelector('.usersIcon');
            newStatusContent.querySelector(".postsCount").innerHTML = postsIcon.outerHTML + postsCount + ' posts';
            newStatusContent.querySelector(".usersCount").innerHTML = usersIcon.outerHTML + usersCount + ' users';
            newStatusContent.classList.remove("default");
        }).catch((error) => {
            console.error('Failed to fetch site statistics', error);
        });
    }
});