angular.module('profile', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('profile').config(function($stateProvider) {

    $stateProvider.state('base.profile', {
        url: '/profile',
        templateUrl: 'modules/profile/partial/profile/profile.html',
        controller:'ProfileCtrl'
    });
    /* Add New States Above */

});

