const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button__next',
    prevEl: '.slider-button__prev',
  },
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map(document.querySelector('.map'), {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [7.890761189391702,98.29469223370225],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17,
            controls: ['smallMapDefaultSet']
            }, {
        searchControlProvider: 'yandex#search'
    });
    }