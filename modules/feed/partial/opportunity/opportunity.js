angular.module('feed').controller('OpportunityCtrl',function($scope){

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
        'type': 'opportunities',
        'subtype': 'jobs',
        'closing_date': '2 days',
        'document': 'http://placehold.it/350x150',
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
        'cover': 'http://lorempixel.com/600/300/nature'
    };

    $scope.otherDetails = {
    	company: 'iProgrammer Solutions Pvt. Ltd.',
    	industry: 'Information Technology & Services',
    	email: 'careers@iprogrammer.com',
    	phone: '+91 22 2312 1231',
    	location: 'Pune, Maharashtra',
    	salary: '90 lacs - 1 Crore per annum',
    	experience: '15 years',
    	skills: ['HTML','CSS', 'Software Architecture','Project Management','Agile','Business Studies']
    };

    $scope.$emit('render-right-panel', { page: 'feed' }); //Change this to opportunity relevant right bar

});