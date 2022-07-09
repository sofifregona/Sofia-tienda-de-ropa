import { productoServicios } from "../service/productoServicios.js"

const crearNuevaLinea = (id, nombre, precio, imagen) => {
    const linea = document.createElement("div");
    linea.classList.add("producto");
    linea.id = id;
    const contenido = `
      <div class="imagen-producto" id="img${id}"></div>
      <p class="nombre-producto">${nombre}</p>
      <p class="precio-producto">${precio}</p>
      <a class="producto-detalle" href="articulo.html?id=${id}">Ver producto</a>`;
    linea.innerHTML = contenido;
    linea.querySelector(".imagen-producto").style.cssText = `background-image: url(${imagen});`
    return linea;
  };

productoServicios.listaProductos().then((response) => {
    let numeroDeColumna = 1;
    let cantidadColumnas;
    if (window < 540){
        cantidadColumnas = 2;
    } else {
        cantidadColumnas = 4;
    }
    response.forEach((articulo) => {
        const linea = crearNuevaLinea(articulo.id, articulo.nombre, articulo.precio, articulo.imagen);
        const columna = document.querySelector(`#columna-productos${numeroDeColumna}`)
        if (numeroDeColumna === 4){
            numeroDeColumna = 1;
        } else {
            numeroDeColumna++;
        }
        columna.appendChild(linea);
    })
});