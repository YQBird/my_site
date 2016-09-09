// var login = angular.module('login',[]);

angular.module('login').controller('loginController', function($scope, $window, $http){
	var loginRequest = function(){
		$http({
			method  : 'POST',
			url     : '/login',
			data    : $scope.user,
			// header  : {'Content-Type': 'application/x-www-form-urlencoded'} 
		}).then(function(data){
			if(data === 200){
				console.log(data);				
				$window.location.href="/";
				// handle error
			}else{
				console.log(data);
				$window.location.href="/login";	
				// $scope.errorUsername = "Please check username"
    //     	    $scope.errorPassword = "Please check password"
			}
		}, function(response){
			$scope.errorUsername = "Login failed, Please check username"
        	$scope.errorPassword = "Login failed, Please check password"

		});
	};
    $scope.min = 6;
    $scope.max = 12;
    $scope.required=true;
	$scope.user = {};
	$scope.submitForm = function(){
        if($scope.form.$valid){
        	$window.localStorage.setItem('user', $scope.user.username);
        	loginRequest();
        }else{
        	$scope.errorUsername = "Please check username"
        	$scope.errorPassword = "Please check password"
        }

        // $window.location.href="/";
		
    }
})