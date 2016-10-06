angular.module('feed').controller('PreviewmodalCtrl', function($scope, image, imageArray, post, user, $timeout) {

    $scope.media = image.original_url;
    $scope.imageArray = imageArray;
    $scope.user = user;
    $scope.post = post;

    var calculateContainerHeight = function() {
        var imageHeight = $('.img-responsive').height();
        console.log(imageHeight);
        var modalHeight = $('.modal-body').height();
        console.log(modalHeight);

        var padding = modalHeight - imageHeight;

        $('.abbas-preview-image-container').css('padding-top', Math.floor(padding/2)).css('padding-bottom', Math.floor(padding/2));

        console.log(padding);
    };

    $timeout(function(){
    	console.log($('.modal-body').height());
    	calculateContainerHeight();
    }, 200);

});
