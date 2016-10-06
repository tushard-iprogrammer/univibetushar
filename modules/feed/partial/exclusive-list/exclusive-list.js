angular.module('feed').controller('ExclusiveListCtrl', function($scope) {

    $scope.contents = [{
        title: "Nulla justo. Aliquam quis",
        subtitle: "Ut tellus. Nulla ut erat id ",
        cover: "http://dummyimage.com/400x300.jpg/5fa2dd/ffffff",
        date: function() {
            return moment().add(7, 'h');
        },
        type:'live',
        authors: ["Ashley West", "Adam Long"]
    }, {
        title: "Vestibulum ante ipsum primis.",
        subtitle: "Vivamus vestibulum sagittis sapien",
        cover: "http://dummyimage.com/400x300.jpg/cc0000/ffffff",
        date: function() {
            return moment().add(3, 'd');
        },
        type:'live',
        authors: ["Frances Woods", "Nancy Meyers"]
    }, {
        title: "Morbi vestibulum, velit id.",
        subtitle: "Nunc rhoncus dui vel sem. Sed sagittis",
        cover: "http://dummyimage.com/400x300.jpg/5fa2dd/ffffff",
        date: function() {
            return moment().add(10, 'h');
        },
        type:'recorded',
        authors: ["Matthew Hall", "Pierre Emerick"]
    }, {
        title: "Praesent lectus. Vestibulum quam.",
        subtitle: "Duis consequat dui nec nisi volutpat eleifend.",
        cover: "http://dummyimage.com/400x300.jpg/dddddd/000000",
        date: function() {
            return moment().add(26, 'h');
        },
        type:'alumni',
        authors: ["Ashley Mendoza", "Sweety Sweetums"]
    }, {
        title: "Maecenas leo odio, condimentum id",
        subtitle: "Nulla facilisi. Cras non velit nec nisi vulputate nonummy",
        cover: "http://dummyimage.com/400x300.jpg/ff4444/ffffff",
        date: function() {
            return moment().add(36, 'h');
        },
        type:'courses',
        authors: ["Ryan Oliver", "Jackoff Alltrades"]
    }];

    $scope.$emit('render-right-panel', { message: null });
});
