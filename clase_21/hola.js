


/* 
Crear un formulario de posteo
el formulario tendra un input para el titulo 
y un textarea para el body y un boton con el texto post que active el evento submit

Cuando se envie el formulario se debera capturar titulo y body y se envia via fetch a esta direccion: 
'https://jsonplaceholder.typicode.com/posts'
Y van a mostrar por consola un 'Enviado'
*/



const formularioHTML = document.getElementById("form")
const tituloHTML = document.getElementById("titulo")
const bodyHTML = document.getElementById ("body")

const confirmacion = () => {console.log("enviado")}

const handlelogin = async (evento) => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}) 
    console.log(respuesta)
    evento.preventdefault()
    confirmacion()
}
 
formularioHTML.addEventListener("submit", handlelogin)



