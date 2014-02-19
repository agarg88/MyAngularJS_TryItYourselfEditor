angular.module("app1").controller('EditCodeController', ['$scope', function ($scope) {
              function reload(){
                 //$scope.detail = EditCodeFactory.showComponents();
                 //$scope.detail={sourceCode: EditCodeFactory.showComponents()};
                 $scope.detail={sourceCode:
                                    "<html> \
                                    <body> \
                                    <h1> This is a paragraph one.</h1> \
                                    <h2>This is a paragraph two.</h2> \
                                    <h3>This is a paragraph three.</h3> \
                                    </body> \
                                    </html>"
                                };
              }
              reload();

              $scope.submitCode= function(){
                  $scope.output=$scope.detail.sourceCode;
              }

}]);


/*angular.module("app1").controller('EditCodeController', ['$scope', function ($scope) {
    $scope.model={message:'Hi from EditCodeController'};
}]);

angular.module("app1").controller('EditCodeController', ['$scope','EditCodeFactory',function ($scope, EditCodeFactory) {
*/

