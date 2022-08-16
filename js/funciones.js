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

