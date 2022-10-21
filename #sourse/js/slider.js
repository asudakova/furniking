const collectionsSwiper = new Swiper(".swiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
   spaceBetween: 15,
   loop: true,
   autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false
   },
   speed: 500,
});

const topProdSwiper = new Swiper(".top-swiper", {
	pagination: {
		el: ".top-swiper-pagination",
		clickable: true,
	},
	spaceBetween: 30,
	allowTouchMove: false
});

const newProdSwiper = new Swiper(".new-swiper", {
	pagination: {
		el: ".new-swiper-pagination",
		clickable: true,
	},
	spaceBetween: 30,
	allowTouchMove: false
});

const bestProdSwiper = new Swiper(".best-swiper", {
	pagination: {
		el: ".best-swiper-pagination",
		clickable: true,
	},
	spaceBetween: 30,
	allowTouchMove: false
});

const customersSwiper = new Swiper(".customers__inner", {
	autoHeight: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
   spaceBetween: 30,
	allowTouchMove: false
});

