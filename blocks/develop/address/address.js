ymaps.ready(init);

function init() {
	let myMap = new ymaps.Map("map", {
		center: [26.041504, -80.192578],
        zoom: 10,
        controls: ['geolocationControl']
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([26.041504, -80.192578], {
            balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
        },{
            preset: 'default#icon',
            iconColor: '#ff0000'
        }));

}
