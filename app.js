new hoverEffect({
	parent: document.querySelector('.distortion'),
	intensity: 0.2,
	image1: './blue_pizza.jpg',
	image2: './neon_pizza_sign.jpg',
	// Different Angles Default is 4
	angle: Math.PI / 4,
	// Speed of Image change
	speedIn: 1.2,
	speedOut: 1.2,

	displacementImage: './diss.png'
});
