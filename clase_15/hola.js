/*const nombres = ["maria","pedro","leonel","ezequiel","elias","lucas","julieta","abril","lautaro"]*/
/*
let posicionLeonel = nombres.indexOf("leonel")
nombres.splice(posicionLeonel,1)
console.log(nombres)
*/
/*
let posicionAbril = nombres.indexOf("abril")
nombres.splice (posicionAbril,0,"sofia")
console.log(nombres)
*/
/*
let posicionLucas = nombres.indexOf("lucas")
nombres.splice (posicionLucas-1,1)
console.log(nombres)
console.log(nombres[0].length)
*/
/*

let sumatoriaCarateres = 0
for (let index=0 ; index<nombres.length ; index= index + 1 ) {
    sumatoriaCarateres = sumatoriaCarateres + (nombres[index].length)
}
console.log(sumatoriaCarateres)
*/

const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung'
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung'
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    }
]

/* Crear un array llamado samsung que contenga los productos que sean de la marca samsung 
const samsung = [ ]
for (const objeto of productos) {
    if (objeto.marca === 'samsung') {
        samsung.push(objeto)
    }
}
console.log(samsung)
*/

const arrayBuscado = [ ]
const buscarProducto = (palabra) => {
    for (const objeto of productos){
        if (objeto.title.toLowerCase().includes(palabra.toLowerCase())) {
            arrayBuscado.push(objeto)
        }
    }
    return arrayBuscado
}

console.log(buscarProducto('tv'))


/* 
Crear una funcion que se llame buscarProducto(string) recibira un string y por cada producto del array 
de productos verificara si el titulo tiene incluido el string buscado
Esta funcion debe retornar un array de productos

EJEMPLO:
buscarProducto('noblex') //retorna:  
[ 
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    }
]
buscarProducto('celular')
[
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    }
]

*/