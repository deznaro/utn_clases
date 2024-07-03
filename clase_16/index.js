/*## Login

Debo tener una funcion llamada login que active toda la logica del login

logica de login:

Vamos a solicitar al usuario un email
Validarermos que el email sea un email
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(stringAValidar)

Ejemplo de uso
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test('pepe@gmail.com')

Vamos a solictar al usuario una password 
validar que tenga mas de 6 caracteres, que tenga almenos 1 mayuscula y que no sea '' o null

Si todo esta correcto dira por alerta('Usuario {email} registrado con exito') y retornara al usuario como objeto:

EJEMPLO:

login() //retorna  el usuario {
    email: 'value@gmail.com',
    password: 'Pepe123'
}*/
/*
const tieneMayuscula = (palabra) => palabra.toLowerCase() != palabra

const validacionEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)

const validacionPassword = (password) => password && password.length>= 6 && tieneMayuscula(password)

const solicitarDato = (mensaje, error, validacion) => {
    let dato = prompt (mensaje)
    while (!validacion(dato)) {
        let dato = prompt (error)
    } 
    return dato
} 

const login = () => {
    const usuario = {
        "Mail" : null ,
        "Contraseña" : null
    }
    usuario.email = solicitarDato (
        "Ingrese su email",
        "Mail incorrecto. Por favor, ingrese su mail nuevamente",
        validacionEmail
    )
    usuario.Contraseña = solicitarDato (
        "Ingrese su contraseña. Debe tener 6 caracteres y 1 mayúscula",
        "Contraseña incorrecta. Por favor, ingrese nuevamente",
        validacionPassword
    )
    alert (`El usuario ${usuario.email} ha sido registrado con éxito`)
    return usuario 
}

login()*/
/*
const tieneMayuscula = (palabra) => palabra.toLowerCase() != palabra
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
login()
console.log(usuario)
*/

/*
## Calculadora de operaciones

Crear una funcion llamada calculadora() que de inicio a la sig logica
-Operaciones Disponibles:
    1) +
    2) -

Solicitar una operacion y verificar que la operacion sea valida (es valida si esta dentro de las operaciones disponibles)
Solicitar un numero 1 y validarlo
Solicitar un numero 2 y validarlo

Al finalizar las solicitudes mostrar el resultado por alerta de la sig manera:
'El resultado de {numero1} {operacion} {numero2} es {resultado}
*/

const validacionOperacion = (operacion) => {
    const operacionesDisponibles = ["+","-"] 
    if (operacionesDisponibles.includes(operacion)) {
        return true
    }
    else {return false}
}

const validacionNumero = (numero) => {
    while (!numero || isNaN(numero)) {
        numero = prompt ("ERROR. Escriba nuevamente un número")
    }
}

const calculadora = () => {

    let operacionARealizar = prompt ("Elija una operación a realizar. + o -")
    
    while (!validacionOperacion(operacionARealizar)) {
        operacionARealizar = prompt ("ERROR. Por favor, escriba la operación + o -")
    }

    let num1 = Number(prompt ("Escriba un número"))  
    validacionNumero(num1)

    let num2 = Number(prompt ("Escriba otro número"))
    validacionNumero(num2) 
    
    let resultado = 0
    if (operacionARealizar === "+") {
        resultado = num1 + num2
    }

    else if (operacionARealizar === "-") {
        resultado = num1 - num2
    }

    alert (`El resultado de ${num1} ${operacionARealizar} ${num2} es ${resultado}`)

}

calculadora()






