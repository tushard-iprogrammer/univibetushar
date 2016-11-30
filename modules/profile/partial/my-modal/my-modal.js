angular.module('profile').controller('MyModalCtrl', function ($scope, user_name, age) {
    $scope.user_name = user_name;
    $scope.age = age;
});