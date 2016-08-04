angular.module("myApp").controller('weatherController', function($scope, weatherData) {
   weatherData.async().then(function() {
     $scope.data = weatherData.data;
     console.log($scope.data);
     $scope.icon = "img/weather/" + weatherData.data.weather[0].icon + ".jpeg"
   })
   
})
