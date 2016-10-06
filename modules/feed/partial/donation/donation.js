angular.module('feed').controller('DonationCtrl', function($scope, $uibModal) {

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
        'type': 'donation',
        'subtype': 'campaign',
        'closing_date': moment().add(10, 'd'),
        'document': 'http://placehold.it/350x150',
        'paid': 10000,
        'total': 20000,
        'completion': function() {
            return (($scope.post.paid / $scope.post.total) * 100).toString() + '%';
        }
    };

    $scope.paidPeople = [{ "id": 1, "first_name": "Patricia", "last_name": "Carr", "profile_picture": "https://robohash.org/quasdoloremrepudiandae.png?size=48x48\u0026set=set1", "tagline": "Food Chemist" },
        { "id": 2, "first_name": "Dennis", "last_name": "Hudson", "profile_picture": "https://robohash.org/quirepellatquis.png?size=48x48\u0026set=set1", "tagline": "Database Administrator I" },
        { "id": 3, "first_name": "Barbara", "last_name": "Olson", "profile_picture": "https://robohash.org/autasperioreslaboriosam.png?size=48x48\u0026set=set1", "tagline": "Web Designer IV" },
        { "id": 4, "first_name": "Michael", "last_name": "Stone", "profile_picture": null, "tagline": null },
        { "id": 5, "first_name": "Phyllis", "last_name": "Jones", "profile_picture": "https://robohash.org/suscipitquasea.png?size=48x48\u0026set=set1", "tagline": "Pharmacist" },
        { "id": 6, "first_name": "Johnny", "last_name": "Fields", "profile_picture": "https://robohash.org/magniquiased.png?size=48x48\u0026set=set1", "tagline": "Administrative Officer" },
        { "id": 7, "first_name": "Janice", "last_name": "Scott", "profile_picture": "https://robohash.org/voluptateetarchitecto.png?size=48x48\u0026set=set1", "tagline": "Civil Engineer" },
        { "id": 8, "first_name": "Beverly", "last_name": "Price", "profile_picture": "https://robohash.org/autmodiodio.png?size=48x48\u0026set=set1", "tagline": "Registered Nurse" },
        { "id": 9, "first_name": "Sean", "last_name": "Hamilton", "profile_picture": "https://robohash.org/nequequiaquia.png?size=48x48\u0026set=set1", "tagline": "Associate Professor" },
        { "id": 10, "first_name": "Theresa", "last_name": "Sanders", "profile_picture": "https://robohash.org/rerumsuscipitporro.png?size=48x48\u0026set=set1", "tagline": "Clinical Specialist" },
        { "id": 11, "first_name": "Patricia", "last_name": "Miller", "profile_picture": "https://robohash.org/doloribusreprehenderitsed.png?size=48x48\u0026set=set1", "tagline": "Accountant III" },
        { "id": 12, "first_name": "Phyllis", "last_name": "Ross", "profile_picture": "https://robohash.org/similiqueodiotemporibus.png?size=48x48\u0026set=set1", "tagline": "Programmer Analyst II" },
        { "id": 13, "first_name": "Billy", "last_name": "Cunningham", "profile_picture": "https://robohash.org/eumetatque.png?size=48x48\u0026set=set1", "tagline": "Community Outreach Specialist" },
        { "id": 14, "first_name": "Joan", "last_name": "Price", "profile_picture": "https://robohash.org/voluptatesdoloremaut.png?size=48x48\u0026set=set1", "tagline": "Physical Therapy Assistant" },
        { "id": 15, "first_name": "Virginia", "last_name": "Johnson", "profile_picture": "https://robohash.org/architectosedeum.png?size=48x48\u0026set=set1", "tagline": "Sales Representative" },
        { "id": 16, "first_name": "Kenneth", "last_name": "King", "profile_picture": "https://robohash.org/doloribussequiqui.png?size=48x48\u0026set=set1", "tagline": "Nuclear Power Engineer" },
        { "id": 17, "first_name": "Phyllis", "last_name": "Chavez", "profile_picture": "https://robohash.org/perspiciatisatdignissimos.png?size=48x48\u0026set=set1", "tagline": "Senior Quality Engineer" },
        { "id": 18, "first_name": "Sean", "last_name": "Ramos", "profile_picture": "https://robohash.org/animietfuga.png?size=48x48\u0026set=set1", "tagline": "Engineer I" },
        { "id": 19, "first_name": "Kimberly", "last_name": "Peters", "profile_picture": "https://robohash.org/delenitiassumendamaiores.png?size=48x48\u0026set=set1", "tagline": "Sales Associate" },
        { "id": 20, "first_name": "Virginia", "last_name": "Mcdonald", "profile_picture": "https://robohash.org/rationedistinctioanimi.png?size=48x48\u0026set=set1", "tagline": "Business Systems Development Analyst" },
        { "id": 21, "first_name": "Aaron", "last_name": "Lynch", "profile_picture": "https://robohash.org/etdoloreet.png?size=48x48\u0026set=set1", "tagline": "Marketing Manager" },
        { "id": 22, "first_name": "Douglas", "last_name": "Reid", "profile_picture": "https://robohash.org/quaeratdolortempora.png?size=48x48\u0026set=set1", "tagline": "Design Engineer" },
        { "id": 23, "first_name": "Richard", "last_name": "Payne", "profile_picture": "https://robohash.org/modiautvoluptatibus.png?size=48x48\u0026set=set1", "tagline": "Civil Engineer" },
        { "id": 24, "first_name": "Nancy", "last_name": "Moreno", "profile_picture": "https://robohash.org/fugiatestut.png?size=48x48\u0026set=set1", "tagline": "Electrical Engineer" },
        { "id": 25, "first_name": "Ann", "last_name": "Carter", "profile_picture": "https://robohash.org/animinamlaboriosam.png?size=48x48\u0026set=set1", "tagline": "Environmental Tech" },
        { "id": 26, "first_name": "Jennifer", "last_name": "Jordan", "profile_picture": "https://robohash.org/vitaequiea.png?size=48x48\u0026set=set1", "tagline": "Nurse" },
        { "id": 27, "first_name": "Johnny", "last_name": "Ferguson", "profile_picture": "https://robohash.org/etvoluptatibusculpa.png?size=48x48\u0026set=set1", "tagline": "VP Product Management" },
        { "id": 28, "first_name": "Stephen", "last_name": "Parker", "profile_picture": "https://robohash.org/doloribusdoloremvel.png?size=48x48\u0026set=set1", "tagline": "Chief Design Engineer" },
        { "id": 29, "first_name": "Phillip", "last_name": "White", "profile_picture": "https://robohash.org/nequequiconsequatur.png?size=48x48\u0026set=set1", "tagline": "Professor" },
        { "id": 30, "first_name": "Jeremy", "last_name": "Wells", "profile_picture": "https://robohash.org/atautet.png?size=48x48\u0026set=set1", "tagline": "Database Administrator IV" },
        { "id": 31, "first_name": "Jeremy", "last_name": "Barnes", "profile_picture": "https://robohash.org/quiaaliquamvoluptatem.png?size=48x48\u0026set=set1", "tagline": "Senior Developer" },
        { "id": 32, "first_name": "Frances", "last_name": "Burton", "profile_picture": "https://robohash.org/dolorumlaudantiumet.png?size=48x48\u0026set=set1", "tagline": "VP Sales" },
        { "id": 33, "first_name": "Stephen", "last_name": "Nguyen", "profile_picture": "https://robohash.org/facilismagniinventore.png?size=48x48\u0026set=set1", "tagline": "Software Engineer IV" },
        { "id": 34, "first_name": "Bobby", "last_name": "Fisher", "profile_picture": "https://robohash.org/accusamusnecessitatibuset.png?size=48x48\u0026set=set1", "tagline": "Administrative Assistant IV" },
        { "id": 35, "first_name": "Aaron", "last_name": "Mccoy", "profile_picture": "https://robohash.org/molestiasdoloresad.png?size=48x48\u0026set=set1", "tagline": "Social Worker" },
        { "id": 36, "first_name": "Kelly", "last_name": "Jackson", "profile_picture": "https://robohash.org/nonetperspiciatis.png?size=48x48\u0026set=set1", "tagline": "Senior Quality Engineer" },
        { "id": 37, "first_name": "Albert", "last_name": "Lee", "profile_picture": "https://robohash.org/consecteturrationeut.png?size=48x48\u0026set=set1", "tagline": "Senior Cost Accountant" },
        { "id": 38, "first_name": "Melissa", "last_name": "James", "profile_picture": "https://robohash.org/fugiatitaquenon.png?size=48x48\u0026set=set1", "tagline": "Staff Scientist" },
        { "id": 39, "first_name": "George", "last_name": "Nguyen", "profile_picture": "https://robohash.org/estdolorut.png?size=48x48\u0026set=set1", "tagline": "Health Coach IV" },
        { "id": 40, "first_name": "Shirley", "last_name": "Stephens", "profile_picture": "https://robohash.org/autvoluptasvel.png?size=48x48\u0026set=set1", "tagline": "Physical Therapy Assistant" },
        { "id": 41, "first_name": "Norma", "last_name": "Pierce", "profile_picture": "https://robohash.org/repudiandaenobisqui.png?size=48x48\u0026set=set1", "tagline": "Speech Pathologist" },
        { "id": 42, "first_name": "Arthur", "last_name": "Johnston", "profile_picture": "https://robohash.org/quivoluptatesveritatis.png?size=48x48\u0026set=set1", "tagline": "Software Consultant" },
        { "id": 43, "first_name": "Ralph", "last_name": "West", "profile_picture": "https://robohash.org/dignissimosadipiscirecusandae.png?size=48x48\u0026set=set1", "tagline": "Structural Engineer" },
        { "id": 44, "first_name": "Sarah", "last_name": "Hawkins", "profile_picture": "https://robohash.org/distinctiorepellendusipsa.png?size=48x48\u0026set=set1", "tagline": "Database Administrator II" },
        { "id": 45, "first_name": "Jack", "last_name": "Webb", "profile_picture": "https://robohash.org/quiaconsequaturnon.png?size=48x48\u0026set=set1", "tagline": "Marketing Assistant" },
        { "id": 46, "first_name": "Donald", "last_name": "Myers", "profile_picture": "https://robohash.org/solutasuscipitquod.png?size=48x48\u0026set=set1", "tagline": "Media Manager II" }
    ];


    $scope.openModal = function(type) {
        $uibModal.open({
            size: 'lg',
            animation: true,
            templateUrl: 'modules/feed/partial/donationsModal/donationsModal.html',
            controller: 'DonationsmodalCtrl',
            resolve: {
                paid: function() {
                    return $scope.paidPeople;
                }
            }
        }).result.then(function(result) {
            //do something with the result
        });
    };

    $scope.$emit('render-right-panel', { page: 'feed' });
    
});
