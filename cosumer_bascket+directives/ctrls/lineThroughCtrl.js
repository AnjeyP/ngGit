 
  productListApp.controller("lineThroughCtrl", function ($scope){

            
            $scope.setStyle = function (passed) {
                return passed ? "text-decoration:line-through" : "";
            }
         });