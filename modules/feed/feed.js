angular.module('feed', ['ui.bootstrap', 'ui.router', 'ngAnimate']);

angular.module('feed').config(function($stateProvider) {

    $stateProvider.state('base.feed', {
        url: '/feed',
        templateUrl: 'modules/feed/partial/feed/feed.html',
        controller: 'FeedCtrl'
    });
    $stateProvider.state('base.post', {
        url: '/detail',
        templateUrl: 'modules/feed/partial/post/post.html',
        controller:'PostCtrl'
    });
    $stateProvider.state('base.status-update', {
        url: '/detail/status/:id',
        templateUrl: 'modules/feed/partial/status-update/status-update.html',
        controller: 'StatusUpdateCtrl'
    });
    $stateProvider.state('base.opportunity', {
        url: '/detail/opportunity/:id?type',
        templateUrl: 'modules/feed/partial/opportunity/opportunity.html',
        controller: 'OpportunityCtrl'
    });
    $stateProvider.state('base.exclusive', {
        url: '/detail/exclusive/:id?type',
        templateUrl: 'modules/feed/partial/exclusive/exclusive.html',
        controller:'ExclusiveCtrl'
    });
    $stateProvider.state('base.events', {
        url: '/detail/event/:id',
        templateUrl: 'modules/feed/partial/events/events.html',
        controller:'EventsCtrl'
    });
    $stateProvider.state('base.donation', {
        url: '/detail/donation/:id',
        templateUrl: 'modules/feed/partial/donation/donation.html',
        controller: 'DonationCtrl'
    });
    $stateProvider.state('base.exclusive-list', {
        url: '/list/exclusive',
        templateUrl: 'modules/feed/partial/exclusive-list/exclusive-list.html',
        controller: 'ExclusiveListCtrl'
    });
    /* Add New States Above */
});
