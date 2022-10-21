document.addEventListener('DOMContentLoaded', function() {
   
   //for fixated header while scrolling
   const header = document.querySelector('.header');
   const sticky =  document.querySelector('.header__bottom').offsetTop;
   window.onscroll = () => {
      if (window.pageYOffset > sticky) {
         header.classList.add('active');
      } else {
         header.classList.remove('active');
      }
   };

   //Currency custom dropdown
   const currency = document.querySelector('.currency__current');
   const currencyDropdown = document.querySelector('.currency__dropdown');
   currency.addEventListener('click', function(e) {
      e.preventDefault();
      currency.classList.toggle('active');
      currencyDropdown.classList.toggle('active');
   });
   const currencyOptions = document.querySelectorAll('.currency__option');
   currencyOptions.forEach(option => {
      option.addEventListener('click', function(e) {
         e.preventDefault();
         const currentCurrency = document.querySelector('.current-currency');
         currentCurrency.classList.remove('current-currency');
         this.classList.add('current-currency');
         currency.textContent = this.textContent;
         switch(this.textContent) {
            case 'English (USD)' :
               changeCurrency('$');
               break;
            case 'Moldovan (MDL)' :
               changeCurrency('L');
               break;
            case 'Russian (RUB)' :
               changeCurrency('₽');
               break;
            case 'Turkish (TRY)' :
               changeCurrency('₺');
               break;
         }
         //Close dropdown
         currency.classList.remove('active');
         currencyDropdown.classList.remove('active');
      })
   });

   //Func to change currency symbol
   const currencySymbols = document.querySelectorAll('.currency-symbol');
   function changeCurrency(symbol) {
      currencySymbols.forEach(span => {
         span.textContent = symbol;
      })
   };

   //Categories custom dropdown
   const categories = document.querySelector('.categories__label');
   const categoriesDropdown = document.querySelector('.categories__dropdown');
   categories.addEventListener('click', function(e) {
      e.preventDefault();
      categories.classList.toggle('active');
      categoriesDropdown.classList.toggle('active');
   });
   const categoriesOption = document.querySelectorAll('.categories__option');
   categoriesOption.forEach(category => {
      category.addEventListener('click', function(e) {
         e.preventDefault();
         this.classList.toggle('current-category');
         //Close dropdown
         categories.classList.remove('active');
         categoriesDropdown.classList.remove('active');
      });
   });

   //Navigation on page through menu
   const anchors = document.querySelectorAll('.anchors-scroll, .main-scroll');
   const headerHeight = header.clientHeight;
   anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const el = this.getAttribute('href');
         const target = document.querySelector(el).offsetTop - headerHeight + 30;
         window.scrollTo({
            top: target,
            behavior: 'smooth'
         });
         if (burgerIcon.classList.contains('active')) {
            menu.classList.remove('active');
            burgerIcon.classList.remove('active');
            document.body.classList.remove('lock');
         }
      });
   });

   //Func to use for 'trending' and 'our products' sections
   function productNav(sectionName) {
      const trends = document.querySelectorAll(`.${sectionName}__link`);
      const blocks = document.querySelectorAll(`.${sectionName}__top, .${sectionName}__new, .${sectionName}__best, .${sectionName}__todays, .${sectionName}__all`);
      trends.forEach(trend => {
         trend.addEventListener('click', function(e) {
            e.preventDefault();
            trends.forEach(trend => {
               trend.classList.remove('active');
            });
            blocks.forEach(block => {
               block.classList.remove('active');
            });
            this.classList.toggle('active');
            const blockName = this.getAttribute('data-trend');
            const block = document.querySelector(`.${sectionName}__${blockName}`);
            block.classList.add('active');
         });
      })
   }
   productNav('trending');
   productNav('products');

   //Changing color of products' icons (fav, cart, compare, view) by clicking
   const hoverIcons = document.querySelectorAll('.product__fav, .product__cart, .product__compare, .product__view');
   hoverIcons.forEach(icon => {
      icon.addEventListener('click', function(e) {
         e.preventDefault();
         this.classList.toggle('active');
      })
   })

   const allCollectNav = document.querySelector('.nav__all');
   const collectList = document.querySelector('.home__collections');
   allCollectNav.addEventListener('click', function(e) {
      e.preventDefault();
      collectList.classList.toggle('active');
   })
   const lensIco = document.querySelector('.header__lens');
   const searchingForm = document.querySelector('.header__form');
   lensIco.addEventListener('click', function(e) {
      e.preventDefault();
      searchingForm.classList.toggle('active');
   })

   const burgerIcon = document.querySelector('.nav__icon');
   const menu = document.querySelector('.nav__list');
   burgerIcon.addEventListener('click', () => {
      menu.classList.toggle('active');
      burgerIcon.classList.toggle('active');
      document.body.classList.toggle('lock');
   });
});





   

