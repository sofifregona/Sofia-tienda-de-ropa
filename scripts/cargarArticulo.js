import {productoServicios} from "../service/productoServicios.js"

const id = window.location.search.slice(4);
const imagen = document.querySelector(".imagen-articulo");
const nombre = document.querySelector(".nombre-articulo");
const precio = document.querySelector(".precio-articulo");
const descripcion = document.querySelector(".descripcion-articulo");
const talles = document.querySelector(".talles-articulo");

productoServicios.detalleProducto(id).then((response) => {
    imagen.style.cssText = `background: url(${response.imagen}); background-position: center; background-repeat: no-repeat; background-size: cover;`
    nombre.innerHTML = response.nombre;
    if (response.nuevoprecio !== ""){
        precio.innerHTML = `<del>${response.precio}</del> ${response.nuevoprecio};`
    }
    descripcion.innerHTML = response.descripcion;
    response.talles.forEach((talle) => {
        if (talle !== []){
        const circulo = document.createElement("div");
        circulo.innerHTML = `<p>${talle}</p>`;
        circulo.classList.add("talle");
        talles.appendChild(circulo);
    }
    })
})

setTimeout(() => {
    window.scroll(2000, 2000);
}, 3000)