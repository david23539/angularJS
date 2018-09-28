
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'parciales/home.html',
            controller: 'inicioCtrl'


        })
        .when('/profesores', {
            templateUrl:'parciales/profesores.html',
            controller: 'profesoresCtrl'
        })
        .when('/alumnos', {
            templateUrl:'parciales/alumno.html',
            controller: 'alumnosCtrl'
        })

        .otherwise({
            redirectTo:'/'
        })
})