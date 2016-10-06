angular.module('common', ['ui.bootstrap', 'ui.router', 'ngAnimate']);

angular.module('common').config(function($stateProvider) {

    $stateProvider.state('base', {
        url: '/app',
        templateUrl: 'modules/common/partial/base/base.html',
        controller:'BaseCtrl'
    });
    $stateProvider.state('base.notificationsList', {
        url: '/list/notifications/:id?scrollTo',
        templateUrl: 'modules/common/partial/notificationsList/notificationsList.html'
    });
    $stateProvider.state('base.form', {
        url: '/new?type',
        templateUrl: 'modules/common/partial/opp-form/opp-form.html',
        controller:'OppFormCtrl'
    });
    $stateProvider.state('base.about', {
        url: '/about',
        templateUrl: 'modules/common/partial/about/about.html',
        controller:'AboutCtrl'
    });
    $stateProvider.state('base.list', {
        url: '/list/type?',
        templateUrl: 'modules/common/partial/list/list.html',
        controller: 'ListCtrl'
    });
    $stateProvider.state('base.innerLanding', {
        url: '/mentorship',
        templateUrl: 'modules/common/partial/innerLanding/innerLanding.html',
        controller: 'InnerlandingCtrl'
    });
    /* Add New States Above */

});
