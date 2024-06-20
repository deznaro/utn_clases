/*
calcular (n1,n2,n3){
   return n1+n2+n3
}
*/
/*
mayor (n1, n2)
if n1>n2 
*/
*/
/*
function generarMail (nombre) {
    return (nombre+"gmail.com")
}

generarMail (Marta)
*/

/*
CONVERTIR ESTAS FUNCIONES EN ARROW FUNCTIONS

const mayor = (a, b) = () => {
    if(a > b){
        return a
    } else{
        return b
    }
}

const generarMail = (nombreDeUsuario) => String(nombreDeUsuario + '@gmail.com')


const sumar = (a, b) => Number (a + b) 
*/

/*

Crear un objeto llamado producto que tenga las sig propiedades

precio : number

nombre : string

marca : string

id : number

descripcion : string

let producto = {
    "precio" : 150000,
    "nombre" : "Auto",
    "marca" : "Renault",
    "id" : 1111
    "descripcion" : "Auto económico"
}
*/
/*
const user = {

    name: 'pepe',

    lastname: 'suarez',

    'user preferences': {

        theme: 'dark-mode',

        lang: 'spanish'

    }

}

 

Por consola mostrar un informe del usuario

'El usuario {nombre} {lastname} tiene las preferencias de usuario en:\nModo: {theme} \nLenguaje: {lang}'

console.log("el usuario" + user ["name"] + user ["lastname"] + "tiene las preferencias de usuario en:" \n + "Modo: " + user["user preferences"]["theme"] \n + "Lenguaje: + user["user preferences"] ["lang"])

'El usuario {name} {lastname} creo su cuenta en fecha {created_at} vive en {adress} y su telefono es {tel}'
*/

/*
const user = {

    name: 'pepe',

    lastname: 'suarez',

    'user preferences': {

        theme: 'dark-mode',

        lang: 'spanish'

    },

    'user info': {

        'created_at': '18/9/2005',

        'adress': 'av siempre viva 742',

        tel: '+22 1323-2122'

    }

}

console.log(`
El usuario ${user.name} ${user.lastname} creó su cuenta en fecha ${user["user info"]["created_at"]} 
vive en ${user["user info"].adress}
y su teléfono es ${user["user info"].tel}
`)

Crear una funcion llamada
calcularIva(precio, tipo_factura)
tipo_factura 'A', 'C', 'B'
En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo

*/

calcularIva(100, 'C' | 'B')
{
    precio: 121
    iva: 21
    precioConIva: 121,
    factura: 'B' | 'C'
}
En el caso de si la factura es A el precio tendra el iva discriminado
Ejemplo
calcularIva(100, 'A')
{
    precio: 100
    iva: 21
    precioConIva: 121,
    factura: 'A'
}
{
    precio: number
    iva: number
    precioConIva,
    factura:
}

calcularIva={precio, tipoFactura} => {

}

