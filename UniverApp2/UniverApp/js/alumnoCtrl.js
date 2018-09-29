app.controller('alumnoCtrl', ['$scope','$routeParams','$http', function($scope,$routeParams, $http){

    $scope.codigo = $routeParams.codigo;
    $scope.alumno = {};
    $scope.actualizado = false;
    $scope.creando = false;
    if($scope.codigo === 'nuevo'){
        $scope.creando = true
    }else {
        $http.get('php/servicios/alumnos.getAlumno.php?c='+$scope.codigo)
            .then(function (data) {

                if(data.err !== undefined) {
                    window.location='#!/alumnos';
                    return;
                }

                $scope.alumno = data.data;
            });
    }

    $scope.guardar = function () {
        if($scope.creando) {
         $http.post('php/servicios/alumnos.crear.php', $scope.alumno)
             .then(function (data) {
                 $scope.actualizado = !data.err;

                 setTimeout(function () {
                     $scope.actualizado = false;
                     $scope.$apply();
                 }, 3500);
             })
        }else {
            $http.post('php/servicios/alumnos.guardar.php', $scope.alumno)
                .then(function (data) {
                    $scope.actualizado = !data.err;

                    setTimeout(function () {
                        $scope.actualizado = false;
                        $scope.$apply();
                    }, 3500);
                })
        }
    }

}]);