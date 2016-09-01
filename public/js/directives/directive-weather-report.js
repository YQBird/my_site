function weatherReport(){
    function weather($scope, weatherData){
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
    }

    return {
    	restrict: 'E',
    	scope: {},
    	template: ['<div id="weather" class="weather col-md-6 col-sm-6 col-xs-12">',
            '<h1>{{data.name}}, {{data.sys.country}}</h1>',
            '<h3>{{curtTemp}}°C<span><img ng-src="{{icon}}"></img></span></h3>',
            '<h3>min-max: {{minTemp}}°C - {{maxTemp}}°C</h3>',
            '<h3>Sunrise - Sunset: {{sunRise}} - {{sunSet}}</h3>',
            '</div>'].join(''),
    	controller: weather,
    }
}


angular
    .module('myApp')
    .directive('directiveWeatherReport', weatherReport);