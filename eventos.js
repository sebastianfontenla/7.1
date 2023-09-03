document.addEventListener('DOMContentLoaded', init);

function init() {

    const div = document.getElementById('eldiv');

    div.addEventListener('click', saludar);
}

function saludar() {
    alert('Hola soy el div!')
}