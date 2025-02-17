"use strict"

window.addEventListener("load", windowLoad);

function windowLoad() {
	// Функція ініціалізації
	function digitsCountersInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
		if (digitsCounters.length) {
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}
	// Функція анімації
	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}
	// Пуск при завантаженні сторінки
	// digitsCountersInit();


	// Пуск при скроллі (появі блока з лічільниками)
	let options = {
		threshold: 0.3
	}
	let observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const targetElement = entry.target;
				const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
				if (digitsCountersItems.length) {
					digitsCountersInit(digitsCountersItems);
				}
				// Вимкнути відслідковування після спрацювання
				observer.unobserve(targetElement);
			}
		});
	}, options);

	let sections = document.querySelectorAll('.key-metrics-top__row');
	if (sections.length) {
		sections.forEach(section => {
			observer.observe(section);
		});
	}

	
	// Price NoUiSlider
	const priceRange = document.querySelector('.filter-price__range')
	if (priceRange) {
		const priceRangeInputs = document.querySelectorAll('.filter-price__input');
		const formatForSlider = {
			from: function (formattedValue) {
				return Number(formattedValue);
			},
			to: function (numericValue) {
				return Math.round(numericValue);
			}
		};
		noUiSlider.create(priceRange, {
			start: [0, 100],
			connect: true,
			format: formatForSlider,
			range: {
				'min': 0,
				'max': 100
			}
		});
		priceRange.noUiSlider.on('update', function (values, handle) {
			priceRangeInputs[handle].value = values[handle];
		});
		priceRangeInputs.forEach((priceRangeInput, index) => {
			priceRangeInput.addEventListener('change', function () {
				priceRange.noUiSlider.setHandle(index, this.value);
			})
		});
	}



}





