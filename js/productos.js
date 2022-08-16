let stockProductos = [
    {id: 1, nombre: "aceituna 1", tipo: "aceituna", desc: "aceitunas de la mejor calidad", precio: 1400},
    {id: 2, nombre: "aceites", tipo: "aceites", desc: "aceites de la mejor calidad", precio: 1000},
    {id: 3, nombre: "mayonesas", tipo: "mayo", desc: "mayonesas de distintas variedades", precio: 1100},
    {id: 4, nombre: "salsas", tipo: "salsas", desc: "novedad salsa arcor", precio: 900},
    {id: 5, nombre: "jugos", tipo: "jugos en sobre", desc: "", precio: 200},
    {id: 6, nombre: "sales", tipo: "sal", desc: "sal con especies", precio: 500},
    {id: 7, nombre: "galletitas", tipo: "galletitas", desc: "galletitas con la mejor onda", precio: 200},
    {id: 8, nombre: "fiambres", tipo: "quesos", desc: "novedad barra paladinni", precio: 2000},
    {id: 9, nombre: "fiambres", tipo: "jamon", desc: "barra de jamon reducida en sodio paladinni", precio: 2500},
    {id: 10, nombre: "queso untable", tipo: "untable", desc: "queso untable finlandia ligth", precio: 600},
]

let carritoDeCompras = []

agregarAlCarrito()

function agregarAlCarrito() {

    let elijoProducto = parseInt(prompt('ingrese su ID de su producto')) 

    let productoAgregar = stockProductos.find((el) => el.id == elijoProducto)
    carritoDeCompras.push(productoAgregar)
     console.log(carritoDeCompras)
    actualizarCarrito()
    
}
agregarAlCarrito()

function actualizarCarrito() {
    console.log('cantidad de productos agregados ' + carritoDeCompras.length)
    let suma = carritoDeCompras.reduce((acc, el) => acc + el.precio, 0)

    console.log('la suma total de su Carrito es $' + suma)
}
actualizarCarrito()

function buscarPorproducto (){
    console.log ('buscar productos')
    
}
buscarPorproducto()