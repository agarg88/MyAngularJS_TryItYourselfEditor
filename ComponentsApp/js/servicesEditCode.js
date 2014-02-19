angular.module("app1").factory("EditCodeFactory",function(){
            var data =
                [
                    {
                        sourceCode: "<html> \
                                    <body> \
                                    <h1> This is a paragraph one.</h1> \
                                    <h2>This is a paragraph two.</h2> \
                                    <h3>This is a paragraph three.</h3> \
                                    </body> \
                                    </html> \
                                    ",
                        result: "ABC"
                    }
                ];

            return {



            showComponents: function() {
                //alert("New showComponents of EditCode");
                alert(angular.copy(data));
                return angular.copy(data);
            },

            getCode: function () {

                return data.sourceCode;
            }
            };

           });




