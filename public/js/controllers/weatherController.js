angular.module("myApp").controller('weatherController', function($scope, weatherData) {
   weatherData.async().then(function() {
     $scope.data = weatherData.data;
     $scope.curtTemp = weatherData.data.main.temp;
     $scope.curtTemp = ($scope.curtTemp - 273.15).toFixed(1);
     $scope.minTemp = (weatherData.data.main.temp_min - 273.15).toFixed(1);
     $scope.maxTemp = (weatherData.data.main.temp_max - 273.15).toFixed(1);
     $scope.sunRise = new Date($scope.data.sys.sunrise * 1000);
     $scope.sunRise = $scope.sunRise.getHours().toString() + ":" + $scope.sunRise.getMinutes().toString() + "AM"; 
     $scope.sunSet = new Date($scope.data.sys.sunset * 1000);
     $scope.sunSet = $scope.sunSet.getHours().toString() + ":" + $scope.sunSet.getMinutes().toString() + "PM"; 
     $scope.icon = "http://openweathermap.org/img/w/" + weatherData.data.weather[0].icon + ".png"
   })
   
})
