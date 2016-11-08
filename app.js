angular.module('univibe', ['ui.bootstrap', 'ngAside', 'ui.router', 'ngAnimate', 'auth', 'youtube-embed', 'common', 'feed', 'monospaced.elastic', 'angularMoment', 'wu.masonry', 'profile', 'ngPhotoGrid', 'inbox']);

angular.module('univibe').config(function($stateProvider, $urlRouterProvider, msdElasticConfig) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/welcome');

    /* Elastic Textarea Config */
    msdElasticConfig.append = '\n';

    /* Moment config */
    moment().calendar(null, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
    });

});

angular.module('univibe').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
});
