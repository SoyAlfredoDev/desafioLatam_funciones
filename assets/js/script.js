/*
    Modifica la función para que reciba el elemento clickeado de forma de no
    tener que seleccionarlo nuevamente dentro de la función (1 Punto).
    Para obtener el puntaje, debes entregar los archivos pintar.html y script.js
    funcionando en conjunto con el código modificado.
*/

const ele = document.getElementById("ele1");

function pintar(elemento, color) {
    elemento.style.backgroundColor = color;
}

ele.addEventListener("click", () => pintar(ele, 'blue'));
