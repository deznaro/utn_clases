/* 
Crear una funcion llamada registrarProducto
La funcion solicitara al usuario:
-Titulo: Debe ser un string con mas de 4 caracteres
-Precio: Debe ser un numero positivo mayor a 1
-Descripcion: Debe ser un string con almenos 10 caracteres
-Categoria: Debe ser un string que este dentro de las sig opciones ['tecnologia', 'hogar', 'otros']
-Marca: Debe ser un string con almenos 3 caracteres

Se solicitara siempre mediante uso de prompts

Se mostrara al usuario la sig plantilla/texto por prompt (para que pueda contestar):
Confirmar producto:
-Titulo: 'Mesa de trabajo de madera'
-Precio: '300'
-Descripcion: 'Mesa de trabajo ideal para astillarse'
-Categoria: 'hogar'
-Marca: 'Jorge el carpintero'
Si el usuario elige cancelar (con el button) o escribe 'CANCELAR' o 'NO' se volvera a comenzar
Si el usuario presiona aceptar o escribe 'SI' entonces la funcion creara un objeto del producto y lo mostrara por consola
*/

const validacionTitulo = (titulo) => {
    while (titulo.length < 4) {
        titulo = prompt ("Por favor, ingrese nuevamente el título.")
    }
}

const validacionPrecio = (precio) => {
    while (precio < 1 ) { 
        precio = prompt ("Por favor, ingrese nuevamente un precio mayor a 1.")
    }
}

const validacionDescripcion = (descripcion) => {
    while (descripcion.length < 10) { 
        descripcion = prompt ("Por favor, ingrese nuevamente una descripción de 10 caracteres o más.")
    }
}

const validacionCategoria = (categoria) => {
    categoriaArray = ["tecnologia", "hogar", "otros"]
    while (!categoriaArray.includes(categoria)) {
        categoria = prompt ("Por favor, ingrese una opción de categoría existente.")
    }
}

const validacionMarca = (marca) => {
    while (marca.length < 3) {
        marca = prompt ("Por favor, ingrese una marca existente.") 
    }
}

const registrarProducto = () => {

    let tituloSolicitado = prompt ("Ingrese el título del producto (Debe tener 4 caracteres):")
    validacionTitulo(tituloSolicitado)

    let precioSolicitado = prompt ("Ingrese el precio del producto:")
    validacionPrecio(precioSolicitado)

    let descripcionSolicitada = prompt ("Ingrese la descripción del producto:")
    validacionDescripcion(descripcionSolicitada)

    let categoriaSolicitada = prompt ("Ingrese la categoría del producto (tecnologia, hogar, otros):")
    validacionCategoria(categoriaSolicitada)

    let marcaSolicitada = prompt ("Ingrese la marca del producto:")
    validacionMarca(marcaSolicitada)

    let planillaProducto = (`
    -Titulo: ${tituloSolicitado}
    -Precio: ${precioSolicitado}
    -Descripcion: ${descripcionSolicitada}
    -Categoria: ${categoriaSolicitada}
    -Marca: ${marcaSolicitada}
    `)

    alert(planillaProducto)
    
    let confirmacionProducto = prompt ("¿Desea confirmar registro de producto? si o no")
    if (confirmacionProducto === null || confirmacionProducto === "cancelar" || confirmacionProducto === "no") {
        registrarProducto()
    }
    else if (confirmacionProducto === "si" || confirmacionProducto === "aceptar") {
        const objetoProducto = {
            "Titulo" : tituloSolicitado ,
            "Precio" : precioSolicitado ,
            "Descripcion" : descripcionSolicitada ,
            "Categoria" : categoriaSolicitada ,
            "Marca" : marcaSolicitada ,
        }
        console.log(objetoProducto)
    }
}

alert (registrarProducto())
