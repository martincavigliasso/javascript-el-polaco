const IVA =1.21
const productos = ['aceitunas' , 'salsas' , 'masitas' , 'harinas' , 'aceites']
//                     0           1            2           3             4


const carrito = []

function listaProductos(){
    //debugger
    toal = parseInt (prompt("ingresa un nro."))
    if (productos.length < total)
    for(let i = 0; i < total; i++){
        console.log(productos[i])
    }
}
listaProductos()


function agregarProductos(){
    let nuevoProductos = prompt("ingresa el nuevo producto:")
     productos.push(nuevoProductos)
} 

agregarProductos()

function quitarPoductos(){
    let aQuitar =  parseInt(prompt ("ingrese el ID del producto a quitar"))
    let resultado = productos.splice (aQuitar, 3)
    console.warn ("se elimino el producto:", resultado)
}
quitarPoductos() 

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
nuevoProducto()