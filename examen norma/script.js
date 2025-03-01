function contarPalabras() {
    const texto = document.getElementById('texto').value;
    const palabras = texto.split(' ').filter(palabra => palabra.length > 0);
    const numeroDePalabras = palabras.length;
    document.getElementById('resultado').innerText = `Número de palabras: ${numeroDePalabras}`;
}

function pedirDatos() {
    alert(`Hola necesito que ingreses una frase o texto en el campo de texto y luego presiones el botón "Contar palabras" para que pueda contar las palabras que ingresaste.`); 
}