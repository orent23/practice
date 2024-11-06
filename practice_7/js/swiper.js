// Reviews Slider
const swiperАrrivals = new Swiper('.arrivals__slider', {
	// Optional parameters
	// loop: true,
	slidesPerView: "auto",
	spaceBetween: 30,
	// freeMode: true,
	scrollbar: {
		el: ".arrivals__scroll",
		dragClass: "arrivals__drag-scroll",
		hide: false,
		dragSize: 50,
		draggable: true
	},
	// Navigation arrows
	/*
	navigation: {
		nextEl: '.block-header__arrow--sale-right',
		prevEl: '.block-header__arrow--sale-left',
	},
	*/
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1.2,
			spaceBetween: 15
		},
		460: {
			slidesPerView: 1.5,
			spaceBetween: 30
		},
		560: {
			slidesPerView: 2.2,
			spaceBetween: 30
		},
		950: {
			slidesPerView: 3.2,
			spaceBetween: 20
		},
		1050: {
			slidesPerView: "4",
			spaceBetween: 30,
		}
	}
});