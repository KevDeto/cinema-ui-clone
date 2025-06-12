import { peliculas } from "./peliculas.js";

const peliculasCartelera = peliculas.filter((p) => p.cartelera);

const peliculasContainer = document.getElementById("peliculas-container");
let verMasBtn = document.getElementById("ver-mas-btn");
const sectionPreventa = document.getElementById("section-preventa");

const PELICULAS_INICIALES = 8;
const PELICULAS_POR_CARGA = 8;
let peliculasMostradas = 0;

if (!verMasBtn) {
  verMasBtn = document.createElement("div");
  verMasBtn.id = "btn-container";
  verMasBtn.className = "btn-container";
  verMasBtn.innerHTML = `
    <h4 class="linea"></h4>
    <button id="ver-mas-btn" class="ver-mas-btn" type="button">
        <div class="ver-mas">
            <h4>Ver Más</h4>
            <i class="fa-solid fa-caret-down"></i>
        </div>
    </button>
    `;
  verMasBtn.style.display = "none";
  peliculasContainer.insertAdjacentElement("afterend", verMasBtn);
}

function crearPeliculaCard(pelicula) {
  const wrapper = document.createElement("div");
  wrapper.className = "pelicula-wrapper";

  const card = document.createElement("div");
  card.className = "pelicula-card";

  const clasesClasificacion = {
    ATP: "clasificacion-atp",
    "+13": "clasificacion-13",
    "+16": "clasificacion-16",
    R: "clasificacion-r",
  };
  const claseClasificacion = clasesClasificacion[pelicula.clasificacion] || "";

  card.innerHTML = `
        <div class="pelicula-imagen">
            <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
            ${
              pelicula.destacado
                ? '<div class="destacado-icon"><i class="fa-regular fa-face-smile fa-lg"></i></div> '
                : ""
            }
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

  wrapper.appendChild(card);

  if (pelicula.estreno || pelicula.reestreno) {
    const solapa = document.createElement("div");
    solapa.className = "pelicula-solapa";

    let contenidoSolapa = "";
    if (pelicula.estreno && pelicula.reestreno) {
      contenidoSolapa =
        '<span class="estreno">Estreno</span><span class="reestreno">Re-Estreno</span>';
    } else if (pelicula.estreno) {
      contenidoSolapa = '<span class="estreno">Estreno</span>';
    } else if (pelicula.reestreno) {
      contenidoSolapa = '<span class="reestreno">Re-Estreno</span>';
    }

    solapa.innerHTML = contenidoSolapa;
    wrapper.appendChild(solapa);
    wrapper.classList.add("tiene-solapa");
  }

  return wrapper;
}

function mostrarMasPeliculas() {
  const peliculasRestantes = peliculasCartelera.length - peliculasMostradas;
  const cantidadAMostrar = Math.min(PELICULAS_POR_CARGA, peliculasRestantes);

  for (let i = 0; i < cantidadAMostrar; i++) {
    if (peliculasMostradas < peliculasCartelera.length) {
      const pelicula = peliculasCartelera[peliculasMostradas];
      const card = crearPeliculaCard(pelicula);
      peliculasContainer.appendChild(card);
      peliculasMostradas++;
    }
  }

  actualizarEstadoBoton();

  if (sectionPreventa) {
    sectionPreventa.classList.add("con-boton");
  }
}

function actualizarEstadoBoton() {
  if (peliculasMostradas >= peliculasCartelera.length) {
    verMasBtn.style.display = "none";
    if (sectionPreventa) {
      sectionPreventa.classList.remove("con-boton");
      sectionPreventa.classList.add("sin-boton");
    }
  }
}

function inicializarCartelera() {
  peliculasContainer.innerHTML = "";
  peliculasMostradas = 0;

  const cantidadInicial = Math.min(
    PELICULAS_INICIALES,
    peliculasCartelera.length
  );
  for (let i = 0; i < cantidadInicial; i++) {
    const pelicula = peliculasCartelera[i];
    const card = crearPeliculaCard(pelicula);
    peliculasContainer.appendChild(card);
    peliculasMostradas++;
  }

  if (peliculasCartelera.length > PELICULAS_INICIALES) {
    verMasBtn.style.display = "flex";
    const botonVerMas = verMasBtn.querySelector("#ver-mas-btn");
    botonVerMas.addEventListener("click", mostrarMasPeliculas);

    if (sectionPreventa) {
      sectionPreventa.classList.remove("con-boton");
    }
  } else {
    sectionPreventa.classList.add("sin-boton");

    verMasBtn.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", inicializarCartelera);
