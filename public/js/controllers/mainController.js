angular.module('myApp').controller('mainController', function($scope, $window){
    $scope.personalInfo = {
    	"Name": "Mr Yan",
    	"Address": "231 Rutgers Road, Piscataway",
    	"Company": "Marlabs Inc",
    	"googleLink": "https://www.google.com",
    	"googleIcon": "img/gooIcon.png",
    	"linkedInLink": "https://www.linkedin.com",
    	"linkedInIcon": "img/fbIcon.png"
    };
    $scope.welcomeInfo = "(for i = 0; i < life.length; knowledge++)"

    $scope.timeFunc = function(){
    	var curt = new Date();
    	curt = curt.getHours();
    	if(curt < 5 || curt >= 18){
    		return "Good Evening";
    	} else if(curt >= 5 && curt < 11){
    		return "Good morning"
    	} else {
    		return "Good afternoon"
    	}
    };
    $scope.logged = $window.localStorage.getItem('user');
    $scope.username = $window.localStorage.getItem('user') ? $window.localStorage.getItem('user') : "Who are you?" ;
    $scope.remove = function(){
        $window.localStorage.removeItem('user');
        $scope.username = "";
    }

});