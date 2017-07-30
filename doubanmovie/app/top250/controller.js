(function(angular) {

    var module = angular.module('moviecat.top250', []);

    module.config('$routeProvider', function($routeProvider) {
        $routeProvider.when('/top250', {
            templateUrl: '../top250/view.html',
            controller: 'Top250Controller'
        })
    });

    module.controller('Top250Controller', [
        '$scope',
        function($scope) {
            // console.log(111);
        }
    ]);

})(angular);
