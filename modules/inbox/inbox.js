angular.module('inbox', ['ui.bootstrap', 'ui.router', 'ngAnimate']);

angular.module('inbox').config(function($stateProvider) {

    $stateProvider.state('inbox', {
        url: '/inbox/:id',
        templateUrl: 'modules/inbox/partial/inbox/inbox.html',
        controller: 'InboxCtrl'
    });
    /* Add New States Above */

});
