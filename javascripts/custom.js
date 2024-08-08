$(function(){
    api.onPageChange(() => {
        if (window.location.pathname !== '/') {
            return;
        }
        const first = $('.below-site-header-outlet.search-banner');
        const second = $('.below-site-header-outlet.custom-homepage-connector');
        second.insertAfter(first);
    })
})