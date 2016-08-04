// var app = angular.module("myApp", []);

// app.factory('weatherData', function($http, $q) {
//   var obj = {};
//   var key = "0bde7a04603937fdbb08af760a85ee9b";
//   var data = {};
  
//   // get geolocation use HTML5
//   if(navigator.geolocation) {
//   	//todo
//   	navigator.geolocation.getCurrentPosition(function(position) {
//   		console.log(position.coords.latitude + position.coords.longitude);
//   	})
//   } else{
//   	console.log("doesn't support HTML5 geolocation")
//   }
//   //make Ajax call with lat and lon
//   // $.ajax({
//   // 	url: ""
//   // })
//   // return obj;
// });

if(navigator.geolocation) {
  	//todo
  	navigator.geolocation.getCurrentPosition(function(position) {
  		console.log(position.coords.latitude + position.coords.longitude);
  	})
  } else{
  	console.log("doesn't support HTML5 geolocation")
  }