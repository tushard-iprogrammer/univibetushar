angular.module('auth').directive('bgSlideshow', function($interval, $uibModal) {
    return {
        restrict: 'A',
        scope: {
            bgSlideshow: '&',
            interval: '=',
        },
        templateUrl: 'modules/auth/directive/bg-slideshow/bg-slideshow.html',
        link: function(scope, elem, attrs) {
            scope.$watch('bgSlideshow', function(val) {
                scope.banners = val();
                scope.active_image = 0;
            });

            scope.goToNext = function() {
                scope.active_image++;
                if (scope.active_image >= scope.banners.length) {
                    scope.active_image = 0;
                }
            };

            scope.goToPrev = function() {
                scope.active_image--;
                if (scope.active_image < 0) {
                    scope.active_image = 0;
                }
            };

            scope.seeVideo = function() {
                $uibModal.open({
                    templateUrl: 'modules/auth/partial/video-modal/video-modal.html',
                    controller: 'VideoModalCtrl',
                    size: 'sm'
                }).result.then(function(result) {
                    //do something with the result
                });
            };

            var change = $interval(function() {
                scope.active_image++;
                if (scope.banners) {
                    if (scope.active_image >= scope.banners.length) {
                        scope.active_image = 0;
                    }
                }

            }, scope.interval || 1000);

            scope.$on('$destroy', function() {
                $interval.cancel(change);
            });
        }
    };
});
