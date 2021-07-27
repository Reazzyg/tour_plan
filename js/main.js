$(document).ready(function () {
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
    var myMap = new ymaps.Map(
      document.querySelector('.map'),
      {
        center: [7.890761189391702, 98.29469223370225],
        zoom: 17,
        controls: ['smallMapDefaultSet'],
      },
      {
        searchControlProvider: 'yandex#search',
      }
    );

    myMap.geoObjects.add(
      new ymaps.Placemark(
        [7.890761189391702, 98.29469223370225],
        {
          balloonContent: 'Grand Hilton Hotel',
        },
        {
          preset: 'islands#icon',
          iconColor: '#0095b6',
        }
      )
    );
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

  var menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function () {
    document
      .querySelector('.navbar-bottom')
      .classList.toggle('navbar-bottom_visible');
    document
      .querySelector('.menu-button__line')
      .classList.toggle('menu-button__line--active');
  });

  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  $('.modal__input-phone').mask('+7 (000) 000-00-00');
  $('.footer__input-phone').mask('+7 (000) 000-00-00');
  //Обработка форм валидации
  $('.form').each(function () {
    $(this).validate({
      errorClass: 'invalid',

      messages: {
        messageName: {
          required: 'Please specify your name',
          minlength: 'Name must be at least 2 symbols',
        },
        name: {
          required: 'Please specify your name',
        },
        phone: {
          required: 'Please specify your phone number',
        },
        messageEmail: {
          required: 'We need your email address to contact you',
          email: 'Your email address must be in the format of name@domain.com',
        },
        messagePhone: {
          required: 'Please specify your phone number',
        },
        newsletter: {
          required: 'We need your email address to contact you',
        },
      },
    });
  });
});
