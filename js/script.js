$(document).ready(() =>{
  $('.slider').slick({
    arrows:false,
    dots:true,
    adaptiveHight:true,
    speed:800,
    easing:'ease',
    initialSlide:1,
    autoplay:true,
    autoplaySpeed:3000,
    draggable:true,
    swipe:true,
    waitForAnimate:false,
   
  
  });
});
$(document).ready(() =>{
  $('.mobile__slider').slick({
    arrows:false,
    dots:true,
    adaptiveHight:true,
    speed:800,
    easing:'ease',
    initialSlide:1,
    autoplay:true,
    autoplaySpeed:3000,
    draggable:true,
    swipe:false,
    waitForAnimate:false,
   
  
  });
});

  let iconMenu = document.querySelector('.box__menu-icon');
  let iconMenuFooter = document.querySelector('.box__menu-icon.footer');
  
  if (iconMenuFooter || iconMenuFooter) {

      let menuBody = document.querySelector('.box__menu__body');
      let menuBodyFooter = document.querySelector('.box__menu__body');

      iconMenu.addEventListener('click', (e) => {
          document.body.classList.toggle('_lock');
          iconMenu.classList.toggle('_active');
          menuBody.classList.toggle('_active');

      });

      iconMenuFooter.addEventListener('click', (e) => {

        document.body.classList.toggle('_lock');
        iconMenuFooter.classList.toggle('_active');
        menuBodyFooter.classList.toggle('_active');
        
  });
}

