/*nombre = prompt ("Ingrese su nombre")
localStorage.setItem("username",nombre)

localStorage.getitem(key)

localStorage.removeItem(key)

localStorage.clear()
*/
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


const tieneMayuscula = (palabra) => palabra != palabra.toLowerCase
const validacionEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
const validacionPassword = (password) => password && password.length>= 6 && tieneMayuscula(password)

const solicitarDato = (objeto) => {
    let dato = prompt (objeto.mensaje)
    while (!objeto.validacion(dato)) {
        let dato = prompt (objeto.error)
    } 
    return dato
} 

const DATOS = {
    EMAIL : {
        mensaje : "Ingrese su email",
        error : "Mail incorrecto. Por favor, ingrese su mail nuevamente",
        validacion : validacionEmail
    },
    CONTRASEÑA : {
        mensaje : "Ingrese su contraseña. Debe tener 6 caracteres y 1 mayúscula",
        error : "Contraseña incorrecta. Por favor, ingrese nuevamente",
        validacion : validacionPassword
    }
}

const login = () => {
    const usuario = {
        "Mail" : null ,
        "Contraseña" : null
    }
    usuario.Mail = solicitarDato (DATOS.EMAIL)
    usuario.Contraseña = solicitarDato (DATOS.CONTRASEÑA)

    alert (`El usuario ${usuario.Mail} ha sido registrado con éxito`) 
    return usuario
}

let usuarioRegistrado = login ()
localStorage.setItem("user", JSON.stringify(usuarioRegistrado))

console.log(JSON.parse(localStorage.getItem("user")))

/*## Historial


-agregarAlHistorial
-mostrarHistorial/renderizarHistorial


ESTO NO ES FUNCION: Van a intentar obtener el historial del localStorage si nos devuelve null el getItem deberemos guardar un array vacio en el local storage

Vamos a crear una funcion llamada obtener historial que nos devuelva el array historial (debe retornar un array)
Vamos a crear en nuestro programa la funcion guardarEnHistorial que reciba un objeto y lo guarde en el local storage dentro del array historial

EJEMPLO DE USO:

obtenerHistorial() => retornara un array historial [{}, {}]
guardarEnHistorial(objeto) => agrega al array guardado en localstorage el objeto recibido*/
