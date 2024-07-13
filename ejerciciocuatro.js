/* 4.- Invertir un array (10 ptos).
Escribe un código en el cual dado un arreglo , muestre en consola el arreglo original y el
mismo pero invertido.
Ejemplo arreglo original: [23,5,34,56,98,”cadena”,7] el arreglo invertido:
[7,”cadena”,98,56,34,5,23]. */

function invertirArreglo(arreglo) {
    console.log("Arreglo original:", arreglo);

    let arregloInvertido = [...arreglo].reverse();  
    
    console.log("Arreglo invertido:", arregloInvertido);
}
const arregloOriginal = [23, 5, 34, 56, 98, "cadena", 7];

invertirArreglo(arregloOriginal);