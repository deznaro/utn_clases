/*## Historial


-agregarAlHistorial
-mostrarHistorial/renderizarHistorial


ESTO NO ES FUNCION: Van a intentar obtener el historial del localStorage si nos devuelve null el getItem deberemos guardar un array vacio en el local storage

Vamos a crear una funcion llamada obtener historial que nos devuelva el array historial (debe retornar un array)
Vamos a crear en nuestro programa la funcion guardarEnHistorial que reciba un objeto y lo guarde en el local storage dentro del array historial

EJEMPLO DE USO:

obtenerHistorial() => retornara un array historial [{}, {}]
guardarEnHistorial(objeto) => agrega al array guardado en localstorage el objeto recibido*/



/*Cada elemento del historial tendra el siguiente formato
{
    accion: 'calculadora',
    operacion: '+'||'-',
    a: number,
    b: number,
    resultado: number,
    fecha: dd/mm/aaaa || '18|01/2020'
}

Esto significa que cuando usemos guardarEnHistorial debemos guardar el objeto de esa manera


Vamos a crear una funcion llamada renderizarHistorial

va a llamar al historial guardado y por cada elemento del historial vamos a crear la sig plantilla 
`
Accion: {accion}
Operacion: {operacion}
Numeros: {a}, {b}
Resultado: {resultado}
fecha: {fecha}
`

y la acumularan en un string y al finalizar el recorrido mostraran el string por alerta


Para hacer el ejercicio recuerden previamente guardar algunas operaciones en el historial y borren las anteriores
*/



if(localStorage.getItem('historial') === null){
    localStorage.setItem('historial', JSON.stringify([]))
}
const obtenerHistorial = () => JSON.parse(localStorage.getItem('historial'))

const guardarEnHistorial = (objeto) =>{
    const historial = obtenerHistorial()
    historial.push(objeto)
    localStorage.setItem('historial', JSON.stringify(historial))
}

/*
guardarEnHistorial ({
    accion: 'calculadora',
    operacion: '+',
    a: 3,
    b: 3,
    resultado: 6,
    fecha:  '18/01/2020'
})


guardarEnHistorial({
    accion: 'calculadora',
    operacion: '-',
    a: 8,
    b: 5,
    resultado: 3,
    fecha:  '15/01/2020'
})


guardarEnHistorial ({
    accion: 'calculadora',
    operacion: '+',
    a: 2,
    b: 2,
    resultado: 4,
    fecha:  '30/01/2020'
})
*/

const renderizarHistorial = () => {
    let historialString = " "
    const historiaArray = obtenerHistorial()
    for (const objeto of historiaArray) {
        historialString = historialString + `
        Accion: ${objeto.accion}
        Operacion: ${objeto.operacion}
        Numeros: ${objeto.a}, ${objeto.b}
        Resultado: ${objeto.resultado}
        fecha: ${objeto.fecha}
        `
    }
    return historialString
}
alert(renderizarHistorial())


/*
const renderizarHistorial = () => {
    const historial = obtenerHistorial()
    let historiaString = " "
    for (let objeto of historial) {
        historiaString = historiaString + `
        Accion: ${objeto.accion}
        Operacion: ${objeto.operacion}
        Numeros: ${objeto.a}, ${objeto.b}
        Resultado: ${objeto.resultado}
        fecha: ${objeto.fecha}
        `
    }
    return(historiaString)
}
alert (renderizarHistorial())
*/


