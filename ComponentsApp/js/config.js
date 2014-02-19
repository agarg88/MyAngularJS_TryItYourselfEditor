angular.module("app1").config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',{
        templateURL:"index.html",
        controller:"ComponentController"
    })
    .when('/editCode',{
        templateUrl:"editCode.html",
        controller:"EditCodeController"
    })
    .otherwise({redirectTo: '/'});
}]);
