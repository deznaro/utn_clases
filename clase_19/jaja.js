/*const titulos = document.getElementById("titulos")
console.dir (titulo)

/* DOM = document object model = modelo objeto del documento */
//Document es una variable global que se crea al abrir la pagina
/* console.log(document) */
/*console.dir(document)

//Obtiene un elemento por id, si lo encuentra lo retorna (como objeto), sino, retorna null
const titulo = document.getElementById('titulo')
console.dir(titulo.innerText)


titulo.innerText = 'Hola' 


const cajaProducto = document.getElementById('caja-producto')
console.dir(cajaProducto)

cajaProducto.innerHTML = `
    <h2>Soy un subtitulo</h2>
    <p>Tv muy linda</p>
    <span>Precio: <b>$500</b></span>
`*/
/* 
const usuarioDatos = {
    nombre,
    apellido,
    direccion,
    edad
}

Mostarlo dentro de un div 

h2: Nombre completo: {nombre} {apellido}
span: Edad: {edad}
span: Direccion: {direccion}
*/
/*
const usuario = document.getElementById("usuario")

const usuarioDatos = {
    nombre: "Carolina",
    apellido : "Fernandez" ,
    direccion : "Palmar 7151",
    edad : "27 años"
}

usuario.innerHTML = `
    <h2>Nombre completo: ${usuarioDatos.nombre} ${usuarioDatos.apellido} </h2>
    <span> Edad: ${usuarioDatos.edad} </span>
    <br>
    <span> Dirección : ${usuarioDatos.direccion}</span>
    `
*/
/*
const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 500,
        id: 1,
        descripcion: 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto. Distinguí excelentes detalles en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión. Distinguí detalles excelentes en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión.',
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    },
    {
        nombre: 'tv samsung 42"',
        precio: 1500,
        id: 2,
        descripcion: 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto. Distinguí excelentes detalles en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión. Distinguí detalles excelentes en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión.',
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    },
    {
        nombre: 'tv samsung 52"',
        precio: 2500,
        id: 3,
        descripcion: 'Neo QLED revoluciona los estándares de imágenes con Mini LED 40 veces más chicos que los convencionales. El resultado es un negro mucho más preciso y un brillo perfecto, aportando mucho más realismo al contenido visto. Distinguí excelentes detalles en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión. Distinguí detalles excelentes en las escenas más oscuras y brillantes con los Quantum Mini LED que controlan la luz con precisión.',
        thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$'
    }
]
const productosHTML = document.getElementById('productos')
let plantillaProductos = ''
for(const producto of productos ){
    plantillaProductos = plantillaProductos + `
    <div>
        <h2>${producto.nombre}</h2>
        <img width='200px' src="${producto.thumbnail}"/>
        <span>Precio: ${producto.precio}</span>
        <p>${producto.descripcion}</p>
        <button>Comprar</button>
    </div>
    <hr>
    `
}
productosHTML.innerHTML = plantillaProductos
*/
/*
Renderizar un carrito:
Un array de items llamado carrito
Cada item tiene el sig formato
object:
    nombre: string
    id: numero positivo distinto de 0
    precio: numero positivo distinto de 0
    cantidad: numero positivo distinto de 0
    img: string con la direccion de alguna imagen EJ: https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$
Cada item mostrado en HTML va a tener este formato
Div
    h3: {nombre} id:#{id}
    img: el src tendra el valor {img} y el ancho en 100px
    span: Precio unitario: ${precio} x {cantidad} unidades
    span: Total: ${precio * cantidad}
*/


/*
Por debajo del div dobnde renderizamos el carrito, crear en HTML un span que este vacio
Llamar dicho span por JS y cambiar el texto para que diga: TOTAL: ${precio total}
*/
/*
const productosHTML = document.getElementById("productos")
let stringProductos = " "
const resultado = document.getElementById("resultado")
    let total = 0
    */
/*
    const renderizarCarrito = (carrito) => {
        for (const producto of carrito) {
        stringProductos = stringProductos + `
            <h3>Nombre: ${producto.nombre} Id: #${producto.id}</h3>
            <img width='100px' src="${producto.img}"/>
            <br></br>
            <span>Precio unitario: ${producto.precio} x ${producto.cantidad} unidades </span>
            <span>Total: ${producto.precio * producto.cantidad}</span>
            <br></br>
        `
    }
    productosHTML.innerHTML = stringProductos

    for (producto of carrito) {
        total = total + (producto.precio * producto.cantidad)
    }
    resultado.innerHTML = "Total: " + total
}
*/
/*
const renderizarCarrito = (carrito) =>{
    const carritoHTML = document.getElementById("carrito")
    const totalHTML = document.getElementById('total')

    let total = 0
    let plantillaCarrito = ''
    for (const item of carrito){
        total = total + (item.precio * item.cantidad)
        plantillaCarrito = plantillaCarrito + `
        <div>
            <h3> ${item.nombre} #${item.id} </h3>
            <img width = '100px' src="${item.thumbnail}"/>
            <br>
            <span> PRECIO UNITARIO:${item.precio} x ${item.cantidad}</span>
            <br>
            <span> TOTAL:${item.precio * item.cantidad} </span>
        </div>
        <hr>
        `
    }
    
    carritoHTML.innerHTML = plantillaCarrito
    totalHTML.innerText = 'TOTAL: $' + total
}
/*
const eliminarItemPorId = (id) => {    
    for (producto of carrito) {
        if (id === producto.id && producto.cantidad === 1) {
                let posicionProducto = carrito.indexOf(producto)
                carrito.splice(posicionProducto, 1)
            }
        else if (id === producto.id && producto.cantidad > 1) {
            producto.cantidad = producto.cantidad - 1
        }
    }     
console.log(carrito)
} 
*/
/*
const eliminarItemPorId = (id) => {    
    const itemBuscado = carrito.find((producto) => producto.id = id)
    if (itemBuscado){
        if (itemBuscado.cantidad === 1) {
            const posicionItem = carrito.findIndex((producto) => producto.id = id)
            carrito.splice(posicionItem, 1)
        }
        else {
            itemBuscado.cantidad = itemBuscado.cantidad - 1
        }
        renderizarCarrito(carrito)
    }
    else {console.error("id no existente")}
}

eliminarItemPorId(2)

/*
Crear la funcion llamada agregarItemAlCarrito(item)
Item es un objeto con 
{
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
}
Buscar si en carrito ya existe un elemento con ese id
SI existe unicamente incrementaran su cantidad en 1

SI no existe van a agregarlo al carrito y van a crear una propiedad para ese item llamada cantidad y con el valor 1

EJEMPLO DE USO:

agregarItemAlCarrito({
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Va a incrementar la cantidad de toyota en 1 en el carrito PORQUE YA EXISTE

agregarItemAlCarrito({
        nombre: 'Honda Civic',
        id: 20,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Se agrega al array carrito pero con la propiedad cantidad en 1
*/

const carrito = [
    {
    nombre: "tv touch" , 
    id: 1 ,
    precio: 5000 ,
    cantidad: 3 ,
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$"
    },

    {
    nombre: "tv samsung" , 
    id: 2 ,
    precio: 3500 ,
    cantidad: 1 ,
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$"
    },

    {
    nombre: "tv lg 50'" , 
    id: 3 ,
    precio: 4000 ,
    cantidad: 8 ,
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/feature/164555231/ar-feature-experience-the-wow-ofneo-qled-536472255?$FB_TYPE_K_JPG$"
    }
]



const renderizarCarrito = (carrito) =>{
    const carritoHTML = document.getElementById("carrito")
    const totalHTML = document.getElementById('total')

    let total = 0
    let plantillaCarrito = ''
    for (const item of carrito){
        total = total + (item.precio * item.cantidad)
        plantillaCarrito = plantillaCarrito + `
        <div>
            <h3> ${item.nombre} #${item.id} </h3>
            <img width = '100px' src="${item.thumbnail}"/>
            <br>
            <span> PRECIO UNITARIO:${item.precio} x ${item.cantidad}</span>
            <br>
            <span> TOTAL:${item.precio * item.cantidad} </span>
        </div>
        <hr>
        `
    }
    carritoHTML.innerHTML = plantillaCarrito
    totalHTML.innerText = 'TOTAL: $' + total
}

renderizarCarrito(carrito)


const buscarItemPorId = (id) =>{
    for(const item of carrito) {
        if(item.id === id){
            return item
        }
    }
}

const buscarPosicionItemPorId = (id) =>{
    for(let i = 0; i < carrito.length; i = i + 1){
        const item = carrito[i]
        if(item.id === id){
            return i
        }
    }
}



const eliminarItemPorId = (id) =>{
    /* const itemBuscado = carrito.find((item) => {
        return item.id === id
    }) */

    /* const itemBuscado = buscarItemPorId(id) */
    const itemBuscado = carrito.find((item) => item.id === id)
    if(itemBuscado){
        if(itemBuscado.cantidad === 1){
            //Logica para eliminar item
            const posicionItem = carrito.findIndex((item) => item.id === id)
            carrito.splice(posicionItem, 1)
        }
        else{
            //Logica para decrementar en 1 la cantidad
            itemBuscado.cantidad = itemBuscado.cantidad - 1
        }
        renderizarCarrito(carrito)
    }
    else{
        console.error('Error: item con id inexistente')
    }
    

    console.log(itemBuscado)
}

/*
Crear la funcion llamada agregarItemAlCarrito(item)
Item es un objeto con 
{
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
}
Buscar si en carrito ya existe un elemento con ese id
SI existe unicamente incrementaran su cantidad en 1

SI no existe van a agregarlo al carrito y van a crear una propiedad para ese item llamada cantidad y con el valor 1

EJEMPLO DE USO:

agregarItemAlCarrito({
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Va a incrementar la cantidad de toyota en 1 en el carrito PORQUE YA EXISTE

agregarItemAlCarrito({
        nombre: 'Honda Civic',
        id: 20,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Se agrega al array carrito pero con la propiedad cantidad en 1
*/

const agregarItemAlCarrito = (objeto) => {
    const objetoBuscado = carrito.find((item) => item.id == objeto.id)
    if (objetoBuscado) {
        objetoBuscado.cantidad = objetoBuscado.cantidad + 1
    }
    else {
        objeto.cantidad = 1
        carrito.push(objeto)
    }
    renderizarCarrito(carrito)
}

agregarItemAlCarrito({
    nombre : 'Toyota GR86' ,
    id : 4 ,
    precio : 25000,
    thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"})

agregarItemAlCarrito({
        nombre : 'Toyota GR86' ,
        id : 1 ,
        precio : 25000,
        thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"})