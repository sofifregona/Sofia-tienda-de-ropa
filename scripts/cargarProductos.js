import { productoServicios } from "../service/productoServicios.js";

const categoriaSeleccionada = window.location.search.slice(11);

const crearNuevaLinea = (id, nombre, precio, imagen, nuevoprecio) => {
  const linea = document.createElement("div");
  linea.classList.add("producto");
  linea.id = id;
  const contenido = `
      <div class="imagen-producto" id="img${id}"></div>
      <p class="nombre-producto">${nombre}</p>
      <p class="precio-producto">${precio}</p>
      <a href="articulo.html?id=${id}"><button type="button" class="btn btn-outline-secondary">Ver producto</button></a>`;
  linea.innerHTML = contenido;
  linea.querySelector(
    ".imagen-producto"
  ).style.cssText = `background-image: url(${imagen});`;
  if (nuevoprecio !== ""){
    linea.querySelector(".precio-producto").innerHTML = `<del>${precio}</del> ${nuevoprecio}`;
  }
  return linea;
};

productoServicios.listaProductos().then((response) => {
  let numeroDeColumna = 1;
  let cantidadColumnas;
  if (window.innerWidth < 540) {
    cantidadColumnas = 2;
  } else {
    cantidadColumnas = 4;
  }
  response.forEach((articulo) => {
    console.log(articulo.categoria)
    if (articulo.categoria.toLowerCase().includes(categoriaSeleccionada)) {
      const linea = crearNuevaLinea(
        articulo.id,
        articulo.nombre,
        articulo.precio,
        articulo.imagen,
        articulo.nuevoprecio
      );
      const columna = document.querySelector(
        `#columna-productos${numeroDeColumna}`
      );
      if (numeroDeColumna === cantidadColumnas) {
        numeroDeColumna = 1;
      } else {
        numeroDeColumna++;
      }
      columna.appendChild(linea);
    }
  });
});
