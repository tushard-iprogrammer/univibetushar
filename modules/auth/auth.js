angular.module('auth', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('auth').config(function($stateProvider) {

    $stateProvider.state('landing', {
        url: '/welcome',
        templateUrl: 'modules/auth/partial/landing/landing.html',
        controller: 'LandingCtrl'
    });
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'modules/auth/partial/login/login.html',
        controller:'LoginCtrl'
    });
    $stateProvider.state('static', {
        url: '/static',
        templateUrl: 'modules/auth/partial/static/static.html',
        controller: 'StaticCtrl'
    });
    /* Add New States Above */

});

