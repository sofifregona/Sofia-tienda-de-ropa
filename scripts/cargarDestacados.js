import { productoServicios } from "../service/productoServicios.js";

const carouselInner = document.querySelector(".carousel-inner");
const carouselIndicators = document.querySelector(".carousel-indicators");

const crearNuevoBoton = (slide) => {
  const boton = document.createElement("button");
  boton.classList.add("boton-destacados")
  boton.setAttribute("type", "button");
  boton.setAttribute("data-bs-target", "#myCarousel");
  boton.setAttribute("data-bs-slide-to", `${slide}`);
  boton.setAttribute("aria-label", `Slide ${slide+1}`);
  return boton;
};

const crearNuevaLinea = (id, nombre, precio, imagen) => {
  const linea = document.createElement("div");
  linea.classList.add("carousel-item");
  const contenido = `<div class="destacado">
    <div class="imagen-item d-block"></div>
    <div class="contenido-item d-block">
        <p class="nombre-item">${nombre}</p>
        <p class="precio-item">${precio}</p>
        <a href="articulo.html?id=${id}"><button type="button" class="btn btn-outline-secondary">Ver producto</button></a>
    </div>
  </div>`;
  linea.innerHTML = contenido;
  linea.querySelector(
    ".imagen-item"
  ).style.cssText = `background-image: url(${imagen});`;
  return linea;
};

productoServicios.listaProductos().then((response) => {
  let numeroSlide = 0;
  response.forEach((articulo) => {
    if (articulo.oferta) {
      const linea = crearNuevaLinea(
        articulo.id,
        articulo.nombre,
        articulo.precio,
        articulo.imagen
      );
      const boton = crearNuevoBoton(numeroSlide);
      numeroSlide++;
      carouselInner.appendChild(linea);
      carouselIndicators.appendChild(boton);
    }
  })
}).finally(() => {
  document.querySelectorAll(".carousel-item")[0].classList.add("active");
  document.querySelectorAll(".boton-destacados")[0].classList.add("active");
  document.querySelectorAll(".boton-destacados")[0].setAttribute("aria-current", "true");
});
