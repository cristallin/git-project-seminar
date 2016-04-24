/*global jQuery for the Product Detail page */

product = {
	init : function() {
		var productContainer = jQuery('#productContainer'); 
		console.log("This is a Test" + productContainer);
		console.log("This is a Test 2" + productContainer);
		console.log("This is a Test 3" + productContainer);
		console.log("This is a Test 5" + productContainer);
		console.log("This is a Test 6" + productContainer);
	}
};
// Initialize product init method
$(document).ready(function() {
	product.init();
});