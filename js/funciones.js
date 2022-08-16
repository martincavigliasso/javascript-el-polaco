const IVA =1.21
const productos = ['aceitunas' , 'salsas' , 'masitas' , 'harinas' , 'aceites']
//                     0           1            2           3             4


const carrito = []






function init(){
    titulo("el polaco");
    mostrarMenu();
    escribirMensaje();
      
    }
    init()
  
    function titulo() {
      let h1 = document.createElement('h1')
      h1.innerText= 'Bienvenido a distribuidora el Polaco'
      document.body.append(h1);
    }
    titulo()
  
  
  
    function cambiarClase() {
      let botones = document.getElementsByTagName('button')
      for (const boton of botones) {
        boton.className = 'stylebtn'
      }
    }
    cambiarClase()

    function mensaje() {
      let p = document.createElement('p')
      p.innerText = 'Por favor, selecciona una categoría para continuar'
      document.body.append(p)
    } 
    mensaje() 

    function mostrarMenu()
{
 
   categorias.forEach((categoria)=>{
     const myBtn = document.createElement("button");
     myBtn.setAttribute("class", "styledBtn");
     myBtn.innerHTML=categoria.nombre;
     myBtn.addEventListener("click", ()=>mostrarProductos(categoria.id));
     main.appendChild(myBtn);
   })
}
function escribirMensaje()
{
  const nodoMensaje = document.createElement("p");
  nodoMensaje.innerHTML= "Por favor, selecciona una categoría para continuar:";
  main.appendChild(nodoMensaje);
}


function mostrarProductos(idCategoria)
{
    const productosFiltrados = filtrarProductos(idCategoria);
    let cadena ='';
    productosFiltrados.forEach((element)=>{
      cadena+=`<div>
  
      Nombre Producto: ${element.nombre}<br>
      Precio Producto: ${element.precio}<br>
  
      
      </div>`
  
      document.querySelector("#productos").innerHTML=cadena;
    }); 

}

function filtrarProductos(idCategoria)
{

    return productos.filter(producto=>producto.categoria===idCategoria);

}
