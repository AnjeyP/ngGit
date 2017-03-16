productListApp.filter('customFilter', function(){
	return function(name){
		return "<<" + name + ">>";

	}
});