
const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    speed:800,
    autoplay: {
      delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        
      },
      768: {
        
      },
      
    },

  });