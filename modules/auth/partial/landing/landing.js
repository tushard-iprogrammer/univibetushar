angular.module('auth').controller('LandingCtrl', function($scope, $uibModal) {

    $scope.video = 'wlWsIH_bUKU';

    $scope.events1 = [1, 2];
    $scope.sponsors = [1, 2, 3, 4, 5, 6];
    $scope.events2 = [1, 2, 3];

    $scope.landindFeedItems = [{
            'id': 1,
            'first_name': 'Irene',
            'last_name': 'Moore',
            'profile_picture': 'https://robohash.org/molestiaedelenitineque.bmp?size=48x48&set=set1',
            'posted_time': '2:40 AM',
            'content': 'Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.' +
                'Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others.',
            'type': 'Jobs'
        }, {
            'id': 2,
            'first_name': 'Randy',
            'last_name': 'Mccoy',
            'profile_picture': 'https://robohash.org/quiaeximpedit.bmp?size=48x48&set=set1',
            'posted_time': '4:30 PM',
            'content': 'Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.' +
                'Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others.' +
                'Two dear held mrs feet view her old fine. Bore can led than how has rank. Discovery any extensive' +
                'has commanded direction. Short at front which blind as. Ye as procuring unwilling principle by.',
            'type': 'Leads'
        }, {
            'id': 3,
            'first_name': 'Albert',
            'last_name': 'Lopez',
            'profile_picture': 'https://robohash.org/etexqui.jpg?size=48x48&set=set1',
            'posted_time': '11:02 PM',
            'content': 'Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.',
            'type': 'Newsletters'
        }
        /*, {
                'id': 4,
                'first_name': 'Gloria',
                'last_name': 'Perkins',
                'profile_picture': 'https://robohash.org/etiurevoluptates.bmp?size=48x48&set=set1',
                'posted_time': '7:35 AM',
                'content': 'Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.' +
                    'Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others.' +
                    'Two dear held mrs feet view her old fine. Bore can led than how has rank. Discovery any extensive' +
                    'has commanded direction. Short at front which blind as. Ye as procuring unwilling principle by.'
            }, {
                'id': 5,
                'first_name': 'Gary',
                'last_name': 'Medina',
                'profile_picture': 'https://robohash.org/necessitatibusrecusandaequos.bmp?size=48x48&set=set1',
                'posted_time': '8:51 AM',
                'content': 'Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.' +
                    'Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others.' +
                    'Two dear held mrs feet view her old fine. Bore can led than how has rank. Discovery any extensive' +
                    'has commanded direction. Short at front which blind as. Ye as procuring unwilling principle by.',
                'type': 'Entrepreneur\'s Group'
            }, {
                'id': 6,
                'first_name': 'Susan',
                'last_name': 'Grant',
                'profile_picture': 'https://robohash.org/etsedenim.jpg?size=48x48&set=set1',
                'posted_time': '12:57 PM',
                'content': 'Out too the been like hard off. Improve enquire welcome own beloved matters her. ' +
                    'As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands ' +
                    'unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton.' +
                    ' Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably' +
                    'frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone' +
                    ' style added abode ask. Nay projecting unpleasing boisterous eat discovered solicitude. Own six moments produce ' +
                    'elderly pasture far arrival. Hold our year they ten upon. Gentleman contained so intention sweetness in on resolving.'
            }, {
                'id': 7,
                'first_name': 'Beverly',
                'last_name': 'Simpson',
                'profile_picture': 'https://robohash.org/consequunturnisisunt.bmp?size=48x48&set=set1',
                'posted_time': '11:54 AM',
                'content': 'As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands ' +
                    'unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton.' +
                    'frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone' +
                    ' style added abode ask. Nay projecting unpleasing boisterous eat discovered solicitude. Own six moments produce.'
            }, {
                'id': 8,
                'first_name': 'Pamela',
                'last_name': 'Simmons',
                'profile_picture': 'https://robohash.org/similiquetemporibusmollitia.bmp?size=48x48&set=set1',
                'posted_time': '6:43 PM',
                'content': 'Who is doing what on Saturday night?'
            }, {
                'id': 9,
                'first_name': 'Raymond',
                'last_name': 'Morris',
                'profile_picture': 'https://robohash.org/aliasullamrem.jpg?size=48x48&set=set1',
                'posted_time': '10:08 PM',
                'content': 'Let\'s meet up everyone in Mumbai on 21st'
            }*/
    ];

    $scope.events = [{
        id: 1,
        name: 'Sample Event 1',
        picture: 'http://placehold.it/48x48',
        posted_time: 'Out too the been like hard off. Improve enquire welcome own beloved matters her. ' +
            'As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands ' +
            'unpacked occasion he oh.'
    }, {
        id: 1,
        name: 'Sample Event 1',
        picture: 'http://placehold.it/48x48',
        posted_time: 'Out too the been like hard off. Improve enquire welcome own beloved matters her. ' +
            'As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands ' +
            'unpacked occasion he oh.'
    }];

    $scope.seeVideo = function() {
        $uibModal.open({
            templateUrl: 'modules/auth/partial/video-modal/video-modal.html',
            controller: 'VideoModalCtrl',
            size: 'sm'
        }).result.then(function(result) {
            //do something with the result
        });
    };

    $scope.college = {
        title: 'UPSC Alumni Association',
        smallTitle: 'UPSC AA',
        imgUrlNormal: 'http://placehold.it/200x72',
        imgUrlRetina: 'http://placehold.it/400x144',
        imgUrlRetina3x: 'http://placehold.it/600x216',
        getFinalName: function() {
            var obj = this;
            if (obj.title.length > 35) {
                return obj.smallTitle;
            } else {
                return obj.title;
            }
        }
    };

    $scope.playerVars = {
        controls: 0,
        autoplay: 1
    };


    /*$scope.banners = [{
        title: 'First Slide here',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet.',
        img: 'http://placehold.it/1200x400/fba123/ffffff?text=Slide+1'
    }, {
        title: 'Second Slide here',
        subtitle: 'Donec efficitur luctus quam, in semper nisi euismod id. Donec.',
        img: 'http://placehold.it/1200x400/f00123/ffffff?text=Slide+2'
    }];*/
});
