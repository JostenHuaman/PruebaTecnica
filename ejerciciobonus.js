/* Ejercicio bonus - Convertir caracteres a mayúsculas. (15 ptos).
Diseñar un código que logre convertir caracteres a mayúsculas hasta encontrar un punto, solo
los caracteres previos al Primer punto el resto se quedan en minúsculas, muestra en consola el
antes y el después. */

function convertirAntesDelPunto(cadena) {
    console.log("Cadena original:", cadena);
    
    let indicePunto = cadena.indexOf('.');
    
    if (indicePunto === -1) {
        console.log("Cadena convertida:", cadena.toUpperCase());
        return;
    }
    
    let parteAntesDelPunto = cadena.slice(0, indicePunto).toUpperCase();
    
    let parteDespuesDelPunto = cadena.slice(indicePunto);
    
    let cadenaConvertida = parteAntesDelPunto + parteDespuesDelPunto;
    
    console.log("Cadena convertida:", cadenaConvertida);
}

const cadenaDada = "Hola. ¿Cómo estás? Este es un ejemplo práctico.";

convertirAntesDelPunto(cadenaDada);