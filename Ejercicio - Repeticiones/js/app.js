(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
	$scope.listado = ['david Vizcaino', 'Melisa Flores', 'Juan Carlos Pineda'];
	$scope.listadoProfesores = {
		profesores: [{
			nombre: "Fernando",
			edad : 28,
			clase: 'PEE'
		},
		{
			nombre: "Melissa",
			edad : 24,
			clase: 'ICE'
		},
		{
			nombre: "Carlos",
			edad : 42,
			clase: 'M110'
		}]
	}
	



}]);





})();
