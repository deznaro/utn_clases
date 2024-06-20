/*
const calcularSumatoria = (a,b,c) => a + b + c
    
calcularSumatoria(8,5,9)


const mayor = (a,b) => {
    if (a>b) {
        return a 
    }
    else if (b>a) {
        return b
    }
}
mayor (15,50)

const generarEmail = (nombreDeUsuario) => nombreDeUsuario + "@gmail.com"

generarEmail("pepe")
*/
// OBJETO 
/*
let producto = {
    precio : 1000000,
    nombre : "sandero stepway", 
    marca : "renault", 
    id : 154826
    descripcion : "auto urbano", 
}
*/
/*
const user = {
    nombre : "pepe",
    lastname : "suarez",
    "user preferences" : {
        theme : "dark-mode",
        lang : "spanish"
    },
    "user info" : {
        "created at" : "18/09/2005",
        "adress" : "av siempre viva 1282",
        tel: "+22 5151 5151"
    }
}
*/
/*
console.log ("El usuario " + user["nombre"] + " " + user["lastname"] + "\n" +
"tiene las preferencias de usuario en" + "\n" +
"Modo: " + user["user preferences"]["theme"] + "\n" + "Lenguaje:"+ " " + user["user preferences"]["lang"])

console.log("El usuario" + " "+ user["nombre"] + " " + user["lastname"] + '\n' +
    "creó su cuenta en fecha" + " " + user["user info"]["created at"] + '\n' +
    "vive en" + " " + user["user info"]["adress"] + '\n' + 
    "y su teléfono es" + " " + user["user info"]["tel"]
)

*/
/*
console.log(`
    El usuario ${user.nombre} ${user.lastname}
    tienen las preferencias de usuario en: 
    - Modo: ${user["user preferences"].theme}
    - Lenguaje: ${user["user preferences"].lang}
`)

console.log(`
    El usuario ${user.nombre} ${user.lastname}
    creó su cuenta en fecha ${user["user info"]["created at"]}
    vive en ${user["user info"].adress}
    y su teléfono es ${user["user info"].tel}
`)
*/
/*
Crear una funcion llamada
calcularIva(precio, tipo_factura)
tipo_factura 'A', 'C', 'B'
En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo
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
    const producto = {
    precio: 100
    iva: 21
    precioConIva: 121,
    factura: 'A'
}
{
}
*/

const calcularIva = (precio, tipoFactura) => {

    let iva = precio * 0.21
    
    const resultado = {
        precio : null ,
        iva: iva ,
        precioConIva : precio + iva ,
        factura : tipoFactura ,
    }
    
    if (tipoFactura == "B" || tipoFactura == "C") {
        resultado.precio = precio + iva 
    }
    
    else if (tipoFactura == "A") {
        resultado.precio = precio
    }
    
    return resultado
}

console.log(calcularIva(100,"A"))






