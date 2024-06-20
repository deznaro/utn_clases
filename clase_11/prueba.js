/*
Login

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
*/


/*
function solicitarMail (mail) {
    mail = prompt ("Por favor, ingrese su email")
    while(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(mail))){
        console.log ("Mail incorrecto")
        mail = prompt ("Por favor, ingrese su email")
    } 
}

function solicitarPassword (password) {
    password= prompt ("Por favor, ingrese una contraseña")
    while (password=== " " || null || password.lenght<6)
        alert ("No ingresaste una contraseña correcta")
        password= prompt ("Por favor, ingrese su contraseña nuevamente")
} 

function retornarDatos () {
    alert ("Usuario: " + mail [mail] + "password: " + password)
}


console.log (solicitarMail)
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

const validacion = (numero) => {
    return numero && !IsNan (numero) 
}
function calculadora (funcion, numero1, numero2)
    
    let funcion = prompt ("Ingrese una función. Suma = 1 o Resta = 2.")
    let numero1 = prompt ("ingrese un número")
        while (!validacion (numero1)){
            numero1 = prompt ("Error. Ingrese un número correcto")
        }

    let numero2 = prompt ("Ingrese otro número")
    while (!validacion (numero2)){
        numero2 = prompt ("Error. Ingrese un número correcto")
    }



