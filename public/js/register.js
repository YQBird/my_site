angular.module('register').controller('registerController', function($scope, $http, $window){
	var submitFnc = function(){
		$http({
			method :  'POST',
			url    :  '/register',
			data   :  $scope.user,
			header :  {'Content-Type': 'application/x-www-form-urlencoded'} 
		    })
		    .then(function(data){
	    		$window.localStorage.setItem("user", $scope.user.username);
	    		$window.location.href="/";
	    	}, function(data){
	    		// fail callback;
	    	});
	};
	$scope.user = {};
	$scope.minlength = 6;
	$scope.maxlength = 12;	
	$scope.exp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	$scope.requiredField = true;
	$scope.submitForm = function(){
		var isSubmit = true;

		if(!$scope.user.username){
            isSubmit = false;
            $scope.errorUsername = "Username is not valid, please enter again";
		};
		if(!$scope.user.firstname){
            isSubmit = false;
            $scope.errorFirstname = "Firstname is not valid, please enter again";
		};
		if(!$scope.user.lastname){
            isSubmit = false;
            $scope.errorLastname = "Lastname is not valid, please enter again";
		}
		if(!$scope.user.email){
            isSubmit = false;
            $scope.errorEmail = "Email is not valid, please enter again";
		};
		if(!$scope.user.password){
            isSubmit = false;
            $scope.errorPassword = "Password is not valid, please enter again";
		}

		if(isSubmit || $scope.userForm.$valid){
			submitFnc();
		}
        
	};

})

