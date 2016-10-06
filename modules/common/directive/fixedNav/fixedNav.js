angular.module('common').directive('fixedNav', function($state) {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'modules/common/directive/fixedNav/fixedNav.html',
        link: function(scope, element, attrs, fn) {

            scope.menuItems = [{
                icon: 'info_outline',
                title: 'my institute',
            }, {
                icon: 'card_giftcard',
                title: 'donations',
            }, {
                icon: 'chrome_reader_mode',
                title: 'newsletters'
            }, {
                icon: 'trending_up',
                title: 'leaderboard'
            }, {
                icon: 'face',
                title: 'Mentorship'
            }];

            scope.goto = function(source) {
                switch (source) {
                    case 'my institute': //Use $state.go to a new state
                        $state.go('base.about');
                        break;
                    case 'donations': //Goto donations list
                        //Sample implementation:
                        $state.go('base.list');
                        break;
                    case 'newletters':
                        break;
                    case 'leaderboard':
                        scope.hideParent = true;
                        scope.child = source;
                        break;
                    case 'Mentorship':
                        $state.go('base.innerLanding',{type:'mentors'});
                        break;
                }
            };

            scope.getLeaderBoard = function() {
                scope.leaderBoardList = [{
                    profile_picture: {
                        normal: 'https://robohash.org/danbilzerian.png?size=48x48&set=set1',
                        retina: 'https://robohash.org/danbilzerian.png?size=96x96&set=set1',
                        hires: 'https://robohash.org/danbilzerian.png?size=144x144&set=set1'
                    },
                    name: 'Dan Bilzerian',
                    points: 1732
                }, {
                    profile_picture: {
                        normal: 'https://robohash.org/sivarama.png?size=48x48&set=set1',
                        retina: 'https://robohash.org/sivarama.png?size=96x96&set=set1',
                        hires: 'https://robohash.org/sivarama.png?size=144x144&set=set1'
                    },
                    name: 'R L Sivaramakrishnan',
                    points: 1732
                }];
            };

            scope.getLeaderBoard();
        }
    };
});
