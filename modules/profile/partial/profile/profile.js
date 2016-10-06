angular.module('profile').controller('ProfileCtrl', function($scope) {


    $scope.feedItems = [{
        user: {
            'id': 1,
            'first_name': 'Ankit',
            'last_name': 'Porwal',
            'profile_picture': 'https://robohash.org/ankitporwal.png?size=48x48&set=set1'
        },
        post: {
            'posted_time': moment().toDate(),
            'content': 'Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.' +
                'Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others.',
            'type': 'opportunities',
            'subtype': 'jobs',
            'closing_date': '2 days',
            'document': 'http://placehold.it/350x150',
            'comments': [],
            'likes': 23
        }
    }, {
        user: {
            'id': 2,
            'first_name': 'Ankit',
            'last_name': 'Porwal',
            'profile_picture': 'https://robohash.org/ankitporwal.png?size=48x48&set=set1',
        },
        post: {
            'posted_time': moment().subtract(2, 'm'),
            'content': 'Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.' +
                'Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others.' +
                'Two dear held mrs feet view her old fine. Bore can led than how has rank. Discovery any extensive' +
                'has commanded direction. Short at front which blind as. Ye as procuring unwilling principle by.',
            'type': 'opportunities',
            'subtype': 'leads',
            'closing_date': '32 days',
            'document': 'http://placehold.it/350x150',
            'comments': [{
                name: 'Jackson Jaisingh',
                time: moment().subtract(1, 'h'),
                content: 'This comment is the first of many, or is the most recent comment to be posted'
            }],
            'likes': 23
        }
    }];

    $scope.exclusiveContent = [{
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
        thumb: 'http://lorempixel.com/48/48/abstract'
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


    //Required for rendering the right panel
    $scope.$emit('render-right-panel', { page: 'feed' });


});
