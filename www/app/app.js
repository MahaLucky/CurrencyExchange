angular.module('app', ['ngRoute']).config(['$routeProvider',function($routeProvider) {

        $routeProvider
            .when('/home', {
                templateUrl: 'app/view/home.html',
               
            })
			 .when('/convert', {
                templateUrl: 'app/view/convert.html',
                controller: 'ConvertController'
            })	
			.when('/viewAll', {
                templateUrl: 'app/view/viewAll.html',
                controller: 'ViewAllController'
            })			
            .otherwise({
                redirectTo: '/home'
            });
    }])
	