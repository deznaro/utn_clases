
// eliminar a leonel 
/*
let posicionLeonel = nombre.indexOf ('leonel')
nombre.splice (posicionLeonel,1)
console.log(nombre)
*/

// Eliminar al anterior a lucas 
/*
let posicionLucas = nombre.indexOf ('lucas')
nombre.splice (posicionLucas-1, 1)
console.log(nombre)
*/

//Agregar antes de abril a Sofia 
/*let posicionSofia = nombre.indexOf ('abril')
nombre.splice (posicionSofia, 0, 'sofia')
console.log(nombre)
*/
/*const nombre = ['maria','pedro','leonel','ezequiel','elias','lucas','julieta','abril','lautaro']
let contadorCaracteres = 0
for (let index = 0; index < nombre.length; index = index + 1 ) { 
    contadorCaracteres = contadorCaracteres + nombre[index].length
}
console.log('La cantidad de caracteres es ' + contadorCaracteres)
*/

const array = ['pepe', 'lucas', 'PEDRO', 'JuaN']
for (let palabra of array) {
    if (array[palabra].toUpperCase)
    palabrasGuardadas = palabrasGuardadas + palabra
}
console.log(palabrasGuardadas)
