/*Animación de las imágenes al cargar la página*/

window.addEventListener('load', function() {
    document.querySelector('.imagen_1').classList.add('loaded');
});


window.onload = function() {
    document.getElementById('imagen_2').classList.add('start-animation');
    document.getElementById('textosobre').classList.add('start-animation');
    document.getElementById('textosobremi').classList.add('start-animation');
};
