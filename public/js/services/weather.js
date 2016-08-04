angular.module("myApp").factory('weatherData', function($http, $q) {
  var obj = {};
  var key = "0bde7a04603937fdbb08af760a85ee9b";
  var data = {};
  
  // get geolocation use HTML5
  var deffered = $q.defer();
  obj.async = function() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("geo work");
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        // make ajax call using $http;       
        var myCall = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + key;

        $http.get(myCall).success(function(d) {
          console.log(d);
          obj.data = d;
          console.log(data);
          $("#weather").show();
          deffered.resolve();
        });
        
     })
    } else{
      console.log("doesn't support HTML5 geolocation")
    }

    return deffered.promise;
  }
  return obj;
});