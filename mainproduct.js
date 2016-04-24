/*global jQuery for the Product Detail page */

product = {
	init : function() {
		var productContainer = jQuery('#productContainer'); 
		console.log("This is a Test" + productContainer);
	}
};
// Initialize product init method
$(document).ready(function() {
	product.init();
});