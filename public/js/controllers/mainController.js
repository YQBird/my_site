angular.module('myApp').controller('mainController', ['$scope', function($scope){
    $scope.personalInfo = {
    	"Name": "Qun Yan",
    	"Address": "231 Rutgers Road, Piscataway",
    	"Company": "Marlabs Inc",
    	"Email": "yq1119apzz@gmail.com",
    	"googleLink": "https://plus.google.com/u/0/111421746175562729308/posts",
    	"googleIcon": "img/gooIcon.png",
    	"linkedInLink": "https://www.linkedin.com/in/qun-yan-938854105?trk=nav_responsive_tab_profile",
    	"linkedInIcon": "img/fbIcon.png"
    };
    $scope.welcomeInfo = "(for i = 0; i < life.length; knowledge++)"
    $scope.Name = "Qun Yan";
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
    }
}]);