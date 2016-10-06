angular.module('feed').controller('StatusUpdateCtrl', function($scope, $window, $uibModal) {

    $scope.user = {
        'id': 1,
        'first_name': 'Irene',
        'last_name': 'Moore',
        'profile_picture': 'https://robohash.org/molestiaedelenitineque.bmp?size=48x48&set=set1'
    };

    $scope.post = {
        'posted_time': moment().toDate(),
        'content': 'Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.' +
            'Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others.' +
            'Style never met and those among great. At no or september sportsmen he perfectly happiness ' +
            'attending. Depending listening delivered off new she procuring satisfied sex existence. Person ' +
            'plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. ' +
            'Way necessary had intention happiness but september delighted his curiosity. ' +
            'Furniture furnished or on strangers neglected remainder engrossed.',
        'type': 'status',
        'comments': [{
            name: 'Ankit Porwal',
            time: moment().subtract(1, 'd'),
            content: 'Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others.'
        }, {
            name: 'Singur Singham',
            time: moment().subtract(2, 'd'),
            content: 'Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others.'
        }],
        'likes': 23,
        'media': [{ original_url: 'http://placehold.it/350x150/ff01ab/fff?text=landscape+image+1' }, { original_url: 'http://placehold.it/150x150/873aff/fff?text=landscape+image+2' }, { original_url: 'http://placehold.it/250x150/00ff76/fff?text=landscape+image+3' }]
    };

    var triggerModal = function(image) {
        $uibModal.open({
        	animation:true,
        	size:'lg',
            templateUrl: 'modules/feed/partial/previewModal/previewModal.html',
            controller: 'PreviewmodalCtrl',
            windowClass:'animated fadeIn abbas-preview-modal',
            resolve:{
            	image: function(){
            		return image;
            	},
            	imageArray: function(){
            		return $scope.post.media;
            	},
            	user: function(){
            		return $scope.user;
            	},
            	post: function(){
            		return $scope.post;
            	}
            }
        }).result.then(function(result) {
            //do something with the result
        });
    };

    $scope.gridOptions = {
        urlKey: "original_url",
        sortKey: "nth",
        onClicked: function(image) {
            triggerModal(image);
        },
        onBuilded: function() {
            console.log("built completed!");
            $scope.isBuildingGrid = false;
        },
        margin: 10,
        maxLength: 7
    };

    $scope.$emit('render-right-panel', { page: 'feed' });
});
