angular.module('common').directive('rightPanel', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            page: '=',
            type: '=?'
        },
        templateUrl: 'modules/common/directive/rightPanel/rightPanel.html',
        link: function(scope, element, attrs, fn) {
            scope.exclusiveContent = [{
                title: 'Disrupt or be disrupted',
                authors: [{
                    name: 'Jimmy Roger',
                    company: 'UC Online'
                }, {
                    name: 'Murthy PK',
                    company: 'Nile River LLC'
                }, {
                    name: 'Samba Ravi',
                    company: 'Gabbar Gang'
                }],
                time: moment().add(3, 'd'),
                thumb: 'http://lorempixel.com/48/48/technics'
            }, {
                title: 'Nightlife and youth',
                authors: [{
                    name: 'Ben James',
                    company: 'UC Online'
                }, {
                    name: 'David Wolfe',
                    company: 'Nile River LLC'
                }],
                time: moment().add(1, 'd'),
                thumb: 'http://lorempixel.com/48/48/nightlife'
            }];

            scope.renderRightPanel = function() {
                console.log(scope.page);
                scope.active = scope.page;
                scope.subtype = scope.type;
            };

            scope.renderRightPanel();

            $('#right-panel').affix({
                offset: {
                    top: 73
                }
            });

        }
    };
});
