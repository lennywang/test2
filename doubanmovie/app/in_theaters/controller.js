(function(angular) {

    var module = angular.module('moviecat.in_theaters', []);

    var data = {
        "count": 1,
        "start": 3,
        "total": 43,
        "subjects": [{
            "rating": {
                "max": 10,
                "average": 7.4,
                "stars": "40",
                "min": 0
            },
            "genres": [
                "动作",
                "奇幻",
                "冒险"
            ],
            "title": "加勒比海盗5：死无对证",
            "casts": [{
                "alt": "https://movie.douban.com/celebrity/1054456/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/562.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/562.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/562.jpg"
                },
                "name": "约翰尼·德普",
                "id": "1054456"
            }, {
                "alt": "https://movie.douban.com/celebrity/1054414/",
                "avatars": {
                    "small": "https://img1.doubanio.com/img/celebrity/small/587.jpg",
                    "large": "https://img1.doubanio.com/img/celebrity/large/587.jpg",
                    "medium": "https://img1.doubanio.com/img/celebrity/medium/587.jpg"
                },
                "name": "哈维尔·巴登",
                "id": "1054414"
            }, {
                "alt": "https://movie.douban.com/celebrity/1010543/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/1243.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/1243.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/1243.jpg"
                },
                "name": "杰弗里·拉什",
                "id": "1010543"
            }],
            "collect_count": 133311,
            "original_title": "Pirates of the Caribbean: Dead Men Tell No Tales",
            "subtype": "movie",
            "directors": [{
                "alt": "https://movie.douban.com/celebrity/1019391/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/58032.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/58032.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/58032.jpg"
                },
                "name": "艾斯彭·山德伯格",
                "id": "1019391"
            }, {
                "alt": "https://movie.douban.com/celebrity/1216851/",
                "avatars": {
                    "small": "https://img3.doubanio.com/img/celebrity/small/58031.jpg",
                    "large": "https://img3.doubanio.com/img/celebrity/large/58031.jpg",
                    "medium": "https://img3.doubanio.com/img/celebrity/medium/58031.jpg"
                },
                "name": "乔阿吉姆·罗恩尼",
                "id": "1216851"
            }],
            "year": "2017",
            "images": {
                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2459723975.jpg",
                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2459723975.jpg",
                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2459723975.jpg"
            },
            "alt": "https://movie.douban.com/subject/6311303/",
            "id": "6311303"
        }],
        "title": "正在上映的电影-北京"
    };

    module.config('$routeProvider', function($routeProvider) {
        $routeProvider.when('/in_theaters', {
            templateUrl: '/app/in_theaters/view.html',
            controller: 'IntheatersController'
        })
    });


    module.controller('IntheatersController', ['$scope', function($scope) {
        $scope.subjects = data;
    }]);


    // module.controller('IntheatersController', [
    // '$scope',
    // '$http',
    // function($scope, $http) {
    //     console.log(111);

    // $scope.subjects = [];
    // $scope.message = '';

    // $http.get('/app/data/in_theaters.json').then(function(res) {
    //     if (res.status == 200) {
    //         $scope.subjects = res.data.subjects;
    //     } else {
    //         $scope.message = '获取热映电影错误,错误信息：'; // + res.statusText；
    //     }
    // }, function(err) {
    //     console.log(err);
    // })


    // }
    // ]);

})(angular);
