(function(angular) {

    var module = angular.module('moviecat.comming_soon', []);

    module.config('$routeProvider', function($routeProvider) {
        $routeProvider.when('/comming_soon', {
            templateUrl: '../comming_soon/view.html',
            controller: 'commingSoonController'
        })
    });

    module.controller('commingSoonController', [
        '$scope',
        function($scope) {
            // console.log(111);
        }
    ]);

})(angular);
