/* 3.- Cuenta cuantas veces se repite un caracter en especifico (20 ptos).
Diseña un código en el cual se pueda ingresar una cadena de texto y regrese cuantas
veces se repite un carácter dado en dicha cadena de texto.
Ejemplo la cadena dada es “hola como estas” y el carácter dado para saber cuantas veces
se repite es “o” entonces la consola debería de mostrar: el carácter “o” se repite 3 veces en
“hola como estas”. */

function contarCaracter(cadena, caracter) {
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return `El carácter "${caracter}" se repite ${contador} veces en "${cadena}".`;
}

const cadenaDada = "hola como estas";
const caracterDado = "o";

console.log(contarCaracter(cadenaDada, caracterDado));
