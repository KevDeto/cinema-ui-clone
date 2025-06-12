import { peliculas } from "./peliculas.js";

const CONFIG = {
  CLASIFICACIONES: {
    ATP: "clasificacion-atp",
    "+13": "clasificacion-13",
    "+16": "clasificacion-16",
    R: "clasificacion-r"
  }
};

const estado = {
  peliculasPreventa: [],
  swiperContainer: null
};

const elementosDOM = {
  preventaContainer: document.getElementById("preventa-container")
};

function inicializarPreventa() {
  estado.peliculasPreventa = peliculas.filter(p => p.preventa);
  renderizarPeliculasPreventa();
}

function renderizarPeliculasPreventa() {
  if (!elementosDOM.preventaContainer) return;

  elementosDOM.preventaContainer.innerHTML = "";
  
  estado.peliculasPreventa.forEach(pelicula => {
    const slide = crearSlidePelicula(pelicula);
    elementosDOM.preventaContainer.appendChild(slide);
  });
}

function crearSlidePelicula(pelicula) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  const card = document.createElement("div");
  card.className = "pelicula-card";
  card.innerHTML = generarHTMLCardPelicula(pelicula);

  slide.appendChild(card);
  agregarSolapaAlternativoSiCorresponde(slide, pelicula);

  return slide;
}

function generarHTMLCardPelicula(pelicula) {
  const claseClasificacion = CONFIG.CLASIFICACIONES[pelicula.clasificacion] || "";
  
  return `
    <div class="pelicula-imagen">
      <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
      <div class="pelicula-duracion">
        <span>${pelicula.duracion}</span>
      </div>
    </div>
    <div class="pelicula-info">
      <div class="pelicula-titulo">
        <h3>${pelicula.titulo}</h3>
        <div class="clasificacion pelicula-${claseClasificacion}">
          <span>${pelicula.clasificacion}</span>
        </div>
      </div>
      <div class="pelicula-detalles">
        <p>${pelicula.formato}</p>
      </div>
    </div>
  `;
}

function agregarSolapaAlternativoSiCorresponde(slide, pelicula) {
  if (!pelicula.alternativo) return;

  const solapa = document.createElement("div");
  solapa.className = "pelicula-solapa";
  solapa.innerHTML = '<span class="alternativo">Contenido Alternativo</span>';
  slide.appendChild(solapa);
}

document.addEventListener("DOMContentLoaded", inicializarPreventa);
