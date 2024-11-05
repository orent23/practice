	// Hero Slider
	const swiperArrivals= new Swiper('.arrivals__swiper', {
		// Optional parameters
		loop: true,
		// If we need pagination
		pagination: {
			el: '.arrivals__swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<button type="button" class="' + className + '"></button>';
			}
		},
		// Navigation arrows
		navigation: {
			nextEl: '.arrivals__swiper-button--next',
			prevEl: '.arrivals__swiper-button--prev',
		}
	});
