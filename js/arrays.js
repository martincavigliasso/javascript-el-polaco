function creoID() { return parseInt(Math.random() * 10000) }

const codigo = document.querySelector("#codigo")
const descripcion = document.querySelector("#descripcion")
const importe = document.querySelector("#importe")

const btnNuevo = document.querySelector("#btnNuevo")
const btnGuardar = document.querySelector("#btnGuardar")

btnNuevo.addEventListener("click", nuevoProducto)

function nuevoProducto() {
    codigo.value = creoID()
    descripcion.value = ""
    importe.value = ""
    descripcion.focus()
}












