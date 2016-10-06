angular.module('feed').directive('editor', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'modules/feed/directive/editor/editor.html',
        link: function(scope, element, attrs, fn) {

            scope.type = 'status';

            scope.changeType = function(type) {
                scope.type = type;
                switch (type) {
                    case 'status':
                        scope.media = false;
                        scope.title = false;
                        break;
                    case 'event':
                        scope.title = true;
                        scope.media = true;
                        scope.dateString = 'Event Date';
                        scope.attendees = 'Max Attendees';
                        break;
                    case 'photo':
                        scope.media = true;
                        scope.title = false;
                        break;
                    case 'donation':
                    case 'blogs':
                    case 'newsletter':
                    case 'opportunity':
                        scope.media = true;
                        scope.title = true;
                        scope.dateString = 'Closing Date';
                        scope.attendees = 'Max Applications';
                        break;
                }
            };

            scope.today = function() {
                scope.dt = new Date();
            };
            scope.today();

            scope.clear = function() {
                scope.dt = null;
            };

            function getDayClass(data) {
                var date = data.date,
                    mode = data.mode;
                if (mode === 'day') {
                    var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                    for (var i = 0; i < scope.events.length; i++) {
                        var currentDay = new Date(scope.events[i].date).setHours(0, 0, 0, 0);

                        if (dayToCheck === currentDay) {
                            return scope.events[i].status;
                        }
                    }
                }

                return '';
            }

            scope.inlineOptions = {
                customClass: getDayClass,
                minDate: new Date(),
                showWeeks: true
            };

            // Disable weekend selection
            function disabled(data) {
                var date = data.date,
                    mode = data.mode;
                return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
            }

            scope.dateOptions = {
                dateDisabled: disabled,
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };

            scope.toggleMin = function() {
                scope.inlineOptions.minDate = scope.inlineOptions.minDate ? null : new Date();
                scope.dateOptions.minDate = scope.inlineOptions.minDate;
            };

            scope.toggleMin();

            scope.open1 = function() {
                scope.popup1.opened = true;
            };

            scope.open2 = function() {
                scope.popup2.opened = true;
            };

            scope.setDate = function(year, month, day) {
                scope.dt = new Date(year, month, day);
            };

            scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            scope.format = scope.formats[0];
            scope.altInputFormats = ['M!/d!/yyyy'];

            scope.popup1 = {
                opened: false
            };

            scope.popup2 = {
                opened: false
            };

        }
    };
});
