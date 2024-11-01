"use strict"
//===функція відкриття хрестика
function headerSignUp() {

	const headerTopUser = document.querySelector('.top-header__exit');
	const headerTopExit = document.querySelector('.top-header__wrapper');
	const headerMenu = document.querySelector('.main-header__wrapper');
	
	headerTopUser.addEventListener('click', function (e) {
			headerTopExit.style.display = 'none';
			headerMenu.style.top = "0rem"
	});
}
headerSignUp();

//===функція відкриття підменю=======
function headerPopap () {
    const shopPopap = document.querySelector('.nav-main-header__item--shop-popap');
    const menuPopap = document.querySelector('.nav-main-header__shop');
   
    shopPopap.addEventListener('click', function (e) {
        menuPopap.classList.toggle('active-header-shop-popap');

    })
    document.addEventListener('click', function (e) {
        if (!menuPopap.contains(e.target) && !shopPopap.contains(e.target)) {
            menuPopap.classList.remove('active-header-shop-popap');
        }
        if (menuPopap.classList.contains('active-header-shop-popap')) {
            shopPopap.style.transform ='inherit'
            console.log('cccccccc');
        } 
    });
};
headerPopap ();

//функція відкриття бургеру
const iconMenu = document.querySelector('.icon-menu');

iconMenu.addEventListener('click', () => {
	document.documentElement.classList.toggle('menu-open');
	document.documentElement.classList.toggle('lock');
	document.addEventListener('click', closeMenu);
	if (document.documentElement.classList.contains('menu-open')) {
		document.documentElement.classList.remove('_show-form');
	}
});

function closeMenu(e) {
	const target = e.target;
	if (!target.closest('.header') && (!target.closest('.icon-menu'))) {
		document.documentElement.classList.remove('menu-open');
		document.documentElement.classList.remove('lock');
		document.removeEventListener('click', closeMenu);
	}
}


//функція появи пошуку при кліку на іконку
function search() {
	const searchIcon = document.querySelector('.buttons-main-header__icon-search');
	const searchPopap = document.querySelector('.main-header__search');


	searchIcon.addEventListener('click', function (e) {
			searchPopap.classList.toggle('active-main-header-search')
	});

	document.addEventListener('click', function (e) {
			if (!searchIcon.contains(e.target) && !searchPopap.contains(e.target)) {
					searchPopap.classList.remove('active-main-header-search');
			}
	});
}

search();
// поява панелі в картці

function renderItems(categories, parent) {
	const items = parent.querySelectorAll('.item-product');
	items.forEach(item => {
		const category = item.dataset.category;
		if (categories.includes('all') || categories.some(item => item === category)) {
			item.classList.add('show');
		} else {
			item.classList.remove('show');
		}
	});
}

// goto
const goto = document.querySelectorAll('[data-goto]');
goto.forEach(link => {
	link.addEventListener('click', scrollToItem);
});

function scrollToItem(e) {
	e.preventDefault();
	const link = e.target.dataset.goto;
	if (!link || !document.querySelector(link)) return;
	const element = document.querySelector(link);
	const heightToTop = element.getBoundingClientRect().top;
	window.scrollBy({
		top: heightToTop,
		behavior: 'smooth'
	})

}


// //функція натиску на іконку і появи пошуку
// function search() {
//     const searchIcon = document.querySelector('.buttons-main-header__icon-search');
//     const searchPopap = document.querySelector('.main-header__search');


//     searchIcon.addEventListener('click', function (e) {
//         searchPopap.classList.toggle('active-main-header-search')
//     });

//     document.addEventListener('click', function (e) {
//         if (!searchIcon.contains(e.target) && !searchPopap.contains(e.target)) {
//             searchPopap.classList.remove('active-main-header-search');
//         }
//     });
// }

// search();



// function burger() {
//     const burgerIcon = document.querySelector('.burger-main-header__wrapper');
//     const burgerMenu = document.querySelector('.menu-burger');
//     const body = document.body
//     burgerIcon.addEventListener('click', function (e) {
//         burgerIcon.classList.toggle('burger-menu');
//         burgerMenu.classList.toggle('active-menu-burger')
//         if (burgerMenu.classList.contains('active-menu-burger')) {
//             body.style.cssText =
//             'position: fixed;left: 0;top: 0;'
//             console.log(body);
//         } else {
//             body.style.position = 'static'
//         }
//     });

   
// }

// burger();