var productListApp = angular.module("productListApp", []);

        // Controller

        productListApp.controller("productListCtrl", function ($scope) {

            $scope.data = model;

            
            $scope.addNewProduct = function () {

                $scope.data.products.push({
                    name: $scope.productName,
                    passed: false
                });

                $scope.productName = "";
            }

        });