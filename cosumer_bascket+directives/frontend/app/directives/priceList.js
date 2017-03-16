productListApp.directive("totalPrice", function () {
	return function (scope, element, attr){
		var div = angular.element('<div>');
		element.append(div);
		var sum = 0;
		for (var i=0; i<scope.data.products.length; i++){
			sum=sum+scope.data.products[i].price;
		}
		div.text("В корзине товаров на сумму - "+sum);
	}
});