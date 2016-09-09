var login = angular.module('login',[]);
var register = angular.module('register',[]);
var app = angular.module('myApp', ['ui.router', 'login', 'register']);

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	    .state('home', {
	    	url: '/home',
	    	templateUrl: './views/welcome.html'
	    })
	    .state('photo', {
            url: '/photo',
            templateUrl: './views/photo.html'
	    })
	    .state('me', {
            url: '/me',
            templateUrl: './views/me.html'
	    })
	    .state('todo', {
            url: '/todo',
            templateUrl: './views/todo.html'
	    })
	    .state('login',{
	    	url: '/log',
	    	templateUrl: './views/login.html'
	    })
	    .state('register',{
	    	url: '/register',
	    	templateUrl: './views/signup.html'
	    });

});


