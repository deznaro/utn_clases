//localStorage y sessionStorage



/* localStorage.setItem('username', nombre)
 */
/* console.log(String({nombre: 'pepe'}))


const user = {nombre: 'pepe'}

localStorage.setItem('user', JSON.stringify(user) )

const usuarioFromLocal = JSON.parse(localStorage.getItem('user'))

console.log(usuarioFromLocal.nombre) */


//JSON javascript object notation

//String escrito en formato JSON
'{"nombre": "pepe"}'

//parse permite trasnformar un string con notacion de objetos a un objeto
/* console.log(JSON.parse('{"nombre": "pepe"}'))
 */
//stringify

/* const producto = {
    nombre: 'tv samsung',
    precio: 700
}
let stringConNotacionDeObjeto = JSON.stringify(producto)

console.log(stringConNotacionDeObjeto) */


/* 
Mejorar la funcion login para que el objeto retornado lo guarde en localStorage

*/
/* Guardar este objeto en localstorage */

/*const login = () =>{
    const user = {
        email: null,
        password: 123456,
    }  
}

let usuarioRegistrado = login ()
localStorage.setItem('user', JSON.stringify (usuarioRegistrado))
console.log (usuarioRegistrado)
console.log(localStorage.getItem('user'))
*/
/*
## Historial


-agregarAlHistorial
-mostrarHistorial/renderizarHistorial


ESTO NO ES FUNCION: Van a intentar obtener el historial del localStorage si nos devuelve null 
el getItem deberemos guardar un array vacio en el local storage

Vamos a crear una funcion llamada obtener historial que nos devuelva el array historial (debe retornar un array)
Vamos a crear en nuestro programa la funcion guardarEnHistorial que reciba un objeto y lo guarde 
en el local storage dentro del array historial

EJEMPLO DE USO:

obtenerHistorial() => retornara un array historial [{}, {}]
guardarEnHistorial(objeto) => agrega al array guardado en localstorage el objeto recibido
*/

const user = {
        email: null,
        password: 123456,
    }  
historial = [email, password]

localStorage.setItem([email, password])
localStorage.getItem(login())

obtenerHistorial() {
    if null 
    ( )
}

guardarEnHistorial(objeto)
