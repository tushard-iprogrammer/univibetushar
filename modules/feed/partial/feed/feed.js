angular.module('feed').controller('FeedCtrl', function($scope) {

    /**
     * Post types -
     * 1. jobs - done
     * 2. business leads - done
     * 3. internships
     * 4. updates - done
     * 5. group posts - done
     * 6. photo posts - done
     * 7. recorded - done
     * 8. live sessions
     * 9. exblogs
     * 10. userblogs - done
     */

    $scope.feedItems = [{
            user: {
                'id': 1,
                'first_name': 'Irene',
                'last_name': 'Moore',
                'profile_picture': 'https://robohash.org/molestiaedelenitineque.bmp?size=48x48&set=set1'
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
                'first_name': 'Randy',
                'last_name': 'Mccoy',
                'profile_picture': 'https://robohash.org/quiaeximpedit.bmp?size=48x48&set=set1',
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
        }, {
            user: {
                'id': 3,
                'first_name': 'Albert',
                'last_name': 'Lopez',
                'profile_picture': 'https://robohash.org/etexqui.jpg?size=48x48&set=set1',
            },
            post: {
                'posted_time': moment().subtract(5, 'm'),
                'content': 'Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.',
                'type': 'newsletters',
                'heading': 'Some fancy heading here that is really long and long'
            }
        }, {
            user: {
                'id': 4,
                'first_name': 'Gloria',
                'last_name': 'Perkins',
                'profile_picture': 'https://robohash.org/etiurevoluptates.bmp?size=48x48&set=set1'
            },
            post: {
                'posted_time': moment().subtract(25, 'm'),
                'content': 'Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.' +
                    'Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others.' +
                    'Two dear held mrs feet view her old fine. Bore can led than how has rank. Discovery any extensive' +
                    'has commanded direction. Short at front which blind as. Ye as procuring unwilling principle by.',
                'type': 'status',
                'media': [{ original_url: 'http://placehold.it/300x400/ff01ab/fff?text=portrait+image+1' }]
            }
        }, {
            user: {
                'id': 6,
                'first_name': 'Susan',
                'last_name': 'Grant',
                'profile_picture': 'https://robohash.org/etsedenim.jpg?size=48x48&set=set1'
            },
            post: {
                'posted_time': moment().subtract(2, 'h'),
                'content': 'This is a post to test an image post in landscape mode. ' +
                    'As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands ' +
                    'unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton.' +
                    'frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone' +
                    ' style added abode ask. Nay projecting unpleasing boisterous eat discovered solicitude. Own six moments produce ' +
                    'elderly pasture far arrival. Hold our year they ten upon. Gentleman contained so intention sweetness in on resolving.',
                'type': 'status',
                'media': [{ original_url: 'http://placehold.it/350x150/ff01ab/fff?text=landscape+image+1' }, { original_url: 'http://placehold.it/150x150/873aff/fff?text=landscape+image+2' }, { original_url: 'http://placehold.it/250x150/00ff76/fff?text=landscape+image+3' }]
            }
        }, {
            user: {
                'id': 7,
                'first_name': 'Beverly',
                'last_name': 'Simpson',
                'profile_picture': 'https://robohash.org/consequunturnisisunt.bmp?size=48x48&set=set1'
            },
            post: {
                'posted_time': moment().subtract(8, 'h'),
                'title': 'Disrupt or be disrupted',
                'type': 'exclusive',
                'subtype': 'liveContent',
                'speakers': [{ name: 'Jeffrey Way', company: 'Envato PLC.' }, { name: 'Burak Guzel', company: 'Aptana Studios' }],
                'link': 'https://www.youtube.com/watch?v=wlWsIH_bUKU',
                'duration': '7 minutes',
                'cover': 'http://lorempixel.com/400/300/technics'
            }
        },

        {
            user: {
                'id': 5,
                'first_name': 'Gary',
                'last_name': 'Medina',
                'profile_picture': 'https://robohash.org/necessitatibusrecusandaequos.bmp?size=48x48&set=set1'
            },
            post: {
                'posted_time': moment().subtract(18, 'h'),
                'content': 'Am finished rejoiced drawings so he elegance. Set lose dear upon had two its what seen.' +
                    'Held she sir how know what such whom. Esteem put uneasy set piqued son depend her others.' +
                    'Two dear held mrs feet view her old fine. Bore can led than how has rank. Discovery any extensive' +
                    'has commanded direction. Short at front which blind as. Ye as procuring unwilling principle by.',
                'type': 'Entrepreneur\'s Group'
            }
        }, {
            user: {
                'id': 8,
                'first_name': 'Pamela',
                'last_name': 'Simmons',
                'profile_picture': 'https://robohash.org/similiquetemporibusmollitia.bmp?size=48x48&set=set1'
            },
            post: {
                'posted_time': moment().subtract(1, 'd'),
                'content': 'Who is doing what on Saturday night ' + 'frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness. Few again any alone' +
                    ' style added abode ask. Nay projecting unpleasing boisterous eat discovered solicitude. Own six moments produce.',
                'type': 'blog'
            }

        }
    ];

    $scope.$emit('render-right-panel', { page: 'feed' });

    //Required for removing parallax effect from inner sections
    $('parallax1').hide();
    $('parallax2').hide();
    $('parallax3').hide();
    $('parallax4').hide();

});
