angular.module('auth').controller('LoginCtrl', function($scope) {


	/**
	 * This information is to be retrieved from a service
	 */
    $scope.college = {
        title: 'UPSC Alumni Association',
        smallTitle: 'UPSC AA',
        imgUrlNormal: 'http://placehold.it/64x64',
        imgUrlRetina: 'http://placehold.it/128x128',
        imgUrlRetina3x: 'http://placehold.it/192x192',
        getFinalName: function(){
        	var obj = this;
        	if(obj.title.length > 35){
        		return obj.smallTitle;
        	} else {
        		return obj.title;
        	}
        }
    };


});
