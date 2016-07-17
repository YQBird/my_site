
angular.module('myApp').controller('todoCtrl', function($scope){
    $scope.tasks = [];

    var taskData = localStorage['taskList'];

    if (taskData !== undefined) {
        $scope.tasks = JSON.parse(taskData);
    }
    $scope.searchEnter = function(){
        if(event.which == 13 && $scope.task != ""){
            $scope.addTast();
        }
    };

    $scope.addTast = function(){
        $scope.tasks.push({'taskMessage':$scope.task, 'status': false});
        $scope.task = ''    ;
        localStorage['taskList'] = JSON.stringify($scope.tasks)
    };

    $scope.contentEdit = function(msg){
        
        for(i=0; i<$scope.tasks.length; i++){
            if($scope.tasks[i].taskMessage == msg){
                $scope.tasks[i].taskMessage = event.target.innerText;
            }
        }

        localStorage['taskList'] = JSON.stringify($scope.tasks);
        console.log($scope.tasks)

        event.target.contentEditable = event.target.contentEditable == "true" ? "false": "true";
    };

    $scope.enterAgain = function(msg) {
        if(event.which == 13 && msg != ""){
            $scope.contentEdit(msg);
        }
    };

    $scope.update = function(){
        $scope.tasks.sort(function(x, y) {
            return (x.status === y.status)? 0 : x.status ? -1 : 1;

        })
        localStorage['taskList'] = JSON.stringify($scope.tasks);
    }

    $scope.clean = function(){
        var oldTodos = $scope.tasks;
        $scope.tasks = [];
        angular.forEach(oldTodos, function(task){
            if(!task.status){
                $scope.tasks.push(task);
            }
        });
        localStorage['taskList'] = JSON.stringify($scope.tasks);
    };
});