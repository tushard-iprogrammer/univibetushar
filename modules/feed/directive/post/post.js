angular.module('feed').directive('post', function($state, $uibModal) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            post: '=',
            user: '='
        },
        templateUrl: 'modules/feed/directive/post/post.html',
        link: function(scope, element, attrs, fn) {
            scope.goto = function(type, subtype) {
                switch (type) {
                    case 'status': //goto status update view
                        $state.go('base.status-update', { id: 123 });
                        break;
                    case 'opportunities': //switch based on subtype
                        $state.go('base.opportunity', { id: 456, type: subtype });
                        break;
                    case 'exclusive': //goto exclusive content
                        $state.go('base.exclusive', { id: 789, type: subtype });
                        break;
                    case 'media': //look for subtype
                        break;
                    case 'events': //look for subtype
                        break;
                    default:
                        break;
                }
            };

            var triggerModal = function(image) {
                $uibModal.open({
                    animation: true,
                    size: 'lg',
                    templateUrl: 'modules/feed/partial/previewModal/previewModal.html',
                    controller: 'PreviewmodalCtrl',
                    windowClass: 'animated fadeIn abbas-preview-modal',
                    resolve: {
                        image: function() {
                            return image;
                        },
                        imageArray: function() {
                            return scope.post.media;
                        },
                        user: function() {
                            return scope.user;
                        },
                        post: function() {
                            return scope.post;
                        }
                    }
                }).result.then(function(result) {
                    //do something with the result
                });
            };

            scope.gridOptions = {
                urlKey: "original_url",
                sortKey: "nth",
                onClicked: function(image) {
                    triggerModal(image);
                },
                onBuilded: function() {
                    console.log("built completed!");
                    scope.isBuildingGrid = false;
                },
                margin: 10,
                maxLength: 3
            };

        }
    };
});
