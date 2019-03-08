$(document).ready(function () {

    var swiper = new Swiper('.swiper-container', {
        noSwipingSelector: '.playlist-podcast-item a, .playlist-player-container',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    
});
