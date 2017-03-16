
productListApp.controller("styleListCtrl", function ($scope){

            $scope.showText = function (passed) {
                return passed ? "Да" : "Нет";
            }

            $scope.setStyle = function (passed) {
                return passed ? "color:green" : "color:red; font-weight: bold";
            }
         });