
new Vue({
	el: '#app',
	data: {
		nav_menu: [
			'Home', 'Shop', 'Blog', 'Contact'
		],
		sizes: [
			'XL', 'XXL', 'L', 'M', 'S'
		],
		items: {
			men: [
				{
					product: 'Mens T-Shirt',
					url: './img/products/men/product1.jpg'
				},
				{
					product: 'Slim Khaki Tousers',
					url: './img/products/men/product2.jpg',
				},
				{
					product: 'Nike Shoes',
					url: './img/products/men/product3.jpg',
				},
				{
					product: 'Wirst Watch',
					url: './img/products/men/product4.jpg',
				},
			],
			women: [
				{
					product: 'V Neck Tassel Cape',
					url: './img/products/women/product1.jpg',
				},
				{
					product: 'Printed Wrap Dress',
					url: './img/products/women/product2.jpg',
				},
				{
					product: 'Blue Denim Dress',
					url: './img/products/women/product3.jpg',
				},
				{
					product: 'High Waist Denim Skirt',
					url: './img/products/women/product4.jpg',
				},
			]
		}
	}
});
