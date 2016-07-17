var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
	  .when('/', {
	  	controller: 'mainController',
	  	templateUrl: 'views/home.html'
	  })
	  .when('/about', {
	  	controller: 'aboutController',
	  	templateUrl: 'views/about.html'
	  })
      .when('/todo', {
        controller: 'todoCtrl',
        templateUrl: 'views/todo.html'
      })
	  .otherwise({
	  	redirectTo: '/'
	  });
});


