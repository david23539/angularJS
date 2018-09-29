
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){

    $scope.formData = {};

    $scope.guardar = function(valido){
        if(!valido){
            return;
        }else {
            console.log('post')
        }
    }


	
}]);
