'use strict';

(function() {

  var el = document.querySelector('#map');

  if(el) {
    ymaps.ready(function () {
      var map = new ymaps.Map('map', {
        center: [44.954642, 34.098683],
        zoom: 18,
        scrollZoom: false,
        controls: []
      }, {
        searchControlProvider: 'yandex#search'
      }),
      Placemark = new ymaps.Placemark([44.954642, 34.098683], {
        balloonContent: 'г. Симферополь, Набережная улица, 34'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/pin-icon.svg',
        iconImageSize: [70, 70],
        iconImageOffset: [-35, -80],
      });

      map.geoObjects.add(Placemark);
      map.behaviors.disable('scrollZoom');
      map.controls.add('zoomControl');
      var roadcontrolState = map.controls.get('zoomControl').state.get('size');
      map.controls.get('zoomControl').options.set('size', 'small');
    });
  }

})();
