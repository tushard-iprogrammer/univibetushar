angular.module('common').controller('AboutCtrl',function($scope){

    $scope.$emit('render-right-panel', { page: 'about' });

});