document.addEventListener('DOMContentLoaded', init);
let cont = "";
function init() {
    const btn = document.getElementById('btn');
    const div = document.getElementById('eldiv');

    btn.addEventListener('click', () => cont = "saludar");
    div.addEventListener('click', saludar);
}

function saludar() {
    console.log(cont);
    if (cont == "saludar") {
        alert('Hola!');
        cont = ""
    } else {
        alert('Hola soy el div!');
    }
}