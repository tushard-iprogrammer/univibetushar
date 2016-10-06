angular.module('common').controller('BaseCtrl', function($scope, $aside) {

    $scope.leaderboard = false;

    var originalWidth = 0;

    $scope.openNav = function() {
        $aside.open({
            templateUrl: 'modules/common/partial/sideNav/sideNav.html',
            controller: 'SidenavCtrl',
            placement: 'left'
        }).result.then(function(result) {
            //do something with the result
        });
    };

    $scope.$on('render-right-panel', function(event, data) {
        $scope.page = data.page;
        $scope.type = data.type;
    });
});
