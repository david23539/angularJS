(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
	$scope.geo = {}			
	$http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=angular.callbacks._0')
	  	.then( function(data) {
	  		$scope.geo = data;

		})


}]);





})();
