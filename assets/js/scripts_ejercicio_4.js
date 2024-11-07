/*
    Crea una página junto a un script que guarde dentro de una variable global
    un color dependiendo de la letra del teclado presionada. (2 Puntos).
    ○ La letra a guardará el color rosado.
    ○ La letra s guardará el color naranjo.
    ○ La letra d guardará el color celeste.
    ○ Para guardar el color revisa el tip al final del enunciado.
    ○ Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
    color blanco y borde negro.
    ○ Al presionar las teclas a, s o d, se deberá cambiar el color del div
    “key” a rosado, naranjo o celeste respectivamente.
*/

const divKey = document.querySelector('.key')

document.addEventListener('keydown', (event) => {

    var letra = event.key;

    if (letra === 'a' || letra === 'A') {
        divKey.style.border = '5px solid pink'
    };

    if (letra === 's' || letra === 'S') {
        divKey.style.border = '5px solid orange'
    };

    if (letra === 'd' || letra === 'd') {
        divKey.style.border = '5px solid skyblue'
    };

})