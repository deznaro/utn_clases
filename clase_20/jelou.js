/* 
En html tendremos un numero que se mostrara en un span, dicho numero seria inicialmente 1
Debemos crear el numero mediante JS
Habra un boton <button>+</button>
Cuando ese boton sea clickeado el numero debera incrementarse en 1
*/
let estadoContador = 1

const btnComprarHTML = document.getElementById("btn-comprar")
const contenedorContadorHTML = document.getElementById("contenedorContador")
const btnRestarHTML = document.getElementById("restar")
const btnNroHTML = document.getElementById("nro")
const btnSumarHTML = document.getElementById("sumar")


contenedorContadorHTML.style.display = "none"
btnComprarHTML.style.display = "flex"

const habilitarCompra = () => {
    btnComprarHTML.style.display = "none"
    contenedorContadorHTML.style.display = "flex"
}

const validacionResta = () => estadoContador > 1

const renderizarEstado = () => {
    btnNroHTML.innerText = estadoContador
}

const decrementarUno = () => {
    if (validacionResta(estadoContador)) {
        estadoContador = estadoContador - 1
        renderizarEstado()
    }
    else {
        contenedorContadorHTML.style.display = "none"
        btnComprarHTML.style.display = "flex"
    }
}

const incrementarUno = () => {
    estadoContador = estadoContador + 1 
    renderizarEstado()
    }

btnComprarHTML.addEventListener("click", habilitarCompra)
btnRestarHTML.addEventListener("click", decrementarUno)
btnSumarHTML.addEventListener("click", incrementarUno)