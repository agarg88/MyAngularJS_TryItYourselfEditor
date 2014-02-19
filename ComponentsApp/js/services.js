angular.module("app1").factory("ComponentFactory",function(){
            var data =
                [
                    {
                        id:1,
                        name: "filter",
                        description: "Selects a subset of items from array and returns it as a new array after applying some filter to it.",
                        usage: "filter_expression | filter:expression:comparator",
                        example : "<!DOCTYPE html> \
                                  <html> \
                                  <head> \
                                    <body> \
                                      <div ng-app='myapp'> \
                                        <div ng-controller='FirstController'> \
                                          <input type='text' ng-model='data.message'/> \
                                              <h1> {{ data.message}} </h1> \
                                          </div> \
                                          <div ng-controller='SecondController'> \
                                          <input type='text' ng-model='data.message'/> \
                                          <h1> {{ data.message | reverseFilter }} </h1> </div> \
                                          </div> \
                                          <script type='text/javascript' src='index.js'> \
                                          ",
                        exampleFilterHTML : "<!DOCTYPE html> \
                                  <html> \
                                  <head> \
                                    <body> \
                                      <div ng-app='myapp'> \
                                        <div ng-controller='FirstController'> \
                                          <input type='text' ng-model='data.message'/> \
                                              <h1> {{ data.message}} </h1> \
                                          </div> \
                                          <div ng-controller='SecondController'> \
                                          <input type='text' ng-model='data.message'/> \
                                          <h1> {{ data.message | reverseFilter }} </h1> </div> \
                                          </div> \
                                          <script type='text/javascript' src='index.js'> \
                                          ",
                        exampleFilterJS : "var myApp=angular.module('app1',[]); \
                                          myApp.factory('Data',function(){ \
                                            return { msg: 'I am a data from a service'}; \
                                          }); \
                                          myApp.filter('reverseFilter',function(){ \
                                            return function(text){ \
                                              return text.split('').reverse().join(''); \
                                            } \
                                          }); \
                                          function FirstController($scope,Data){ \
                                            $scope.data=Data; \
                                          } \
                                          function SecondController($scope,Data){ \
                                            $scope.data=Data; \
                                          }",
                        demo:'demo1'
                    },
                    {
                        id:'2',
                        name: "ng-Click",
                        description: "test2@gmail.com",
                        usage:'2',
                        example:"eg2",
                        demo:'demo2'
                    },
                    {
                        id:'3',
                        name: "ng-Repeat",
                        description: "test3@gmail.com",
                        usage:'3',
                        example:"eg3",
                        demo:'demo3'
                    },
                    {
                        id:'4',
                        name: "ng-App",
                        description: "test4@gmail.com",
                        usage:'4',
                        example:"eg4",
                        demo:'demo4'
                    }
                ];

            return {

            getComponent: function (id) {

                for (i in data) {
                        if (data[i].id == id) {
                            alert("getComponent");

                             return data[i];
                        }
                }
            },

            getHTML: function(id){
              for (i in data) {
                  if (data[i].id == id) {

                      return data[i].exampleFilterHTML;
                  }
                }
            },


            getJS: function(id){
              for (i in data) {
                 if (data[i].id == id) {
                    return data[i].exampleFilterJS;
                 }
              }
            },

            listComponents: function() {
                //alert("listComponents");
                return angular.copy(data);
            }
          };
        });