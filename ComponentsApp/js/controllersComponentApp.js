angular.module("app1").controller('ComponentController', ['$scope','ComponentFactory',function ($scope, ComponentFactory) {


             function reload(){
                 $scope.components = ComponentFactory.listComponents();
              }
              reload();

            $scope.show = function(type){
                $scope.selectedIndex = type;
                console.log("hi ");
                switch($scope.selectedIndex) {
                    case 'html':
                     $scope.detail.example= angular.copy(ComponentFactory.getHTML(1));
                     break;
                     case 'js':
                     $scope.detail.example = angular.copy(ComponentFactory.getJS(1));
                     break;
                }


            }

            $scope.showDetail= function(id){

                $scope.detail = angular.copy(ComponentFactory.getComponent(id));

            }
        }]);

/*        angular.module("app1").controller('ComponentController', ['$scope', function ($scope) {
    $scope.model={message:'Hi from ComponentController'};
}]); */