angular.module('common').controller('OppFormCtrl', function($scope) {
    $scope.select = 'opportunity';

    var init = function(type) {
        $scope.$emit('render-right-panel', { page: 'form', type: type });
    };

    $scope.changeType = function(type) {
        $scope.type = type;
        switch (type) {
            case 'event':
                $scope.dateString = 'Event Date';
                $scope.attendees = 'Max Attendees';
                break;
            case 'donation':
            case 'opportunity':
                $scope.dateString = 'Closing Date';
                $scope.attendees = 'Max Applications';
                break;
        }
        init(type);
    };

    init('opportunity'); //Initialize opportunity form by default

    $scope.dateOptions = {
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };




});
