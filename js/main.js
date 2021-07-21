const hotelSlisder = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

    ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map(document.querySelector('.map'), {
            center: [7.890761189391702,98.29469223370225],
            zoom: 17,
            controls: ['smallMapDefaultSet']
        }, {
            searchControlProvider: 'yandex#search'
        });

    
    myMap.geoObjects
                .add(new ymaps.Placemark([7.890761189391702,98.29469223370225], {
            balloonContent: 'Grand Hilton Hotel'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
}
   
    const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

});

$('.parallax-window').parallax({
  imageSrc: 'img/newsletter-bg.jpg',
  speed: 0.6,
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function() {
document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom_visible");
});