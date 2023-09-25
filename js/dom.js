const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('red-text');
const textoVerde = document.getElementById('green-text');
const textoAzul = document.getElementById('blue-text');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// UPDATE THE TEXT OF THE PARAGRAPH
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function updateColor(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

// update input red
inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    updateColor(rojo, verde, azul);
})

// update input green
inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    updateColor(rojo, verde, azul);
})

// update input BLUE
inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    updateColor(rojo, verde, azul);
})








