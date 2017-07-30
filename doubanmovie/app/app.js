'use strict';

angular.module('moviecat', [
    'ngRoute',
    'moviecat.in_theaters',
    'moviecat.comming_soon',
    'moviecat.top250'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/in_theaters' });
}]);


// var module = angular.module('moviecat.in_theaters', []);

// module.config('$routeProvider', function($routeProvider) {
// $routeProvider.when('/in_theaters', {
//     templateUrl: '../in_theaters/view.html',
//     controller: 'Intheaters'
// })

// });

// module.controller('Intheaters', ['$scope', function($scope) {
//     console.log(111);
// }]);
