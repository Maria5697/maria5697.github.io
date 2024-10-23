var expanded = false;

function showCheckboxes() {
var checkboxes = document.getElementById("checkboxes");
if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
} else {
    checkboxes.style.display = "none";
    expanded = false;
}
}

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter_text_button, .filter_text_button_big');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Кнопка нажата'); // Добавим для отладки
            this.classList.toggle('filter_button--color-active'); // Изменено здесь
            console.log('Текущие классы:', this.className); // Добавим для отладки
        });
    });
});

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.93863, 30.31413], // координаты центра карты (Санкт-Петербург)
        zoom: 11 // уровень масштабирования
    });

    // Добавление метки на карту
    var myPlacemark = new ymaps.Placemark([59.93863, 30.31413], {
        hintContent: 'Санкт-Петербург',
        balloonContent: 'Это Санкт-Петербург'
    });

    myMap.geoObjects.add(myPlacemark);
}
