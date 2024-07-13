/* 1.- Random par o impar(10 ptos).
Generar un código el cual genere 5 números aleatorios(Math.random()*100) enteros y
devuelva si el número generado es par o impar.
Ejemplo:
Primera iteración: numeroGenerado = 5 // el número es impar
Segunda iteración: numeroGenerado = 12 // el número es par */

function parOImpar() {
    for (let i = 0; i < 5; i++) {
        let numeroGenerado = Math.floor(Math.random() * 100);
        if (numeroGenerado % 2 === 0) {
            console.log(`Iteración ${i + 1}: numeroGenerado = ${numeroGenerado} // el número es par`);
        }   else {
            console.log(`Iteración ${i + 1}: numeroGenerado = ${numeroGenerado} // el número es impar`);
        }
    }
}  

parOImpar();