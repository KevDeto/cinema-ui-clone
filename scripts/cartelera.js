import { peliculas } from "./peliculas.js";

const CONFIG = {
  PELICULAS_INICIALES: 8,
  PELICULAS_POR_CARGA: 8,
  CLASIFICACIONES: {
    ATP: "clasificacion-atp",
    "+13": "clasificacion-13",
    "+16": "clasificacion-16",
    R: "clasificacion-r",
  },
};

let estado = {
  peliculasMostradas: 0,
  peliculasCartelera: [],
  verMasBtn: null,
};

const elementosDOM = {
  peliculasContainer: document.getElementById("peliculas-container"),
  sectionPreventa: document.getElementById("section-preventa"),
};

function inicializarAplicacion() {
  estado.peliculasCartelera = peliculas.filter((p) => p.cartelera);
  crearBotonVerMasSiNoExiste();
  inicializarCartelera();
  configurarEventListeners();
}

function crearBotonVerMasSiNoExiste() {
  if (!estado.verMasBtn) {
    const btnContainer = document.createElement("div");
    btnContainer.id = "btn-container";
    btnContainer.className = "btn-container";
    btnContainer.innerHTML = `
    <h4 class="linea"></h4>
    <button id="ver-mas-btn" class="ver-mas-btn" type="button">
        <div class="ver-mas">
            <h4>Ver Más</h4>
            <i class="fa-solid fa-caret-down"></i>
        </div>
    </button>
    `;
    btnContainer.style.display = "none";

    elementosDOM.peliculasContainer.insertAdjacentElement(
      "afterend",
      btnContainer
    );
    estado.verMasBtn = btnContainer;
  }
}

function configurarEventListeners() {
  if (estado.verMasBtn) {
    const botonVerMas = estado.verMasBtn.querySelector("#ver-mas-btn");
    botonVerMas?.addEventListener("click", mostrarMasPeliculas);
  }
}

function crearPeliculaCard(pelicula) {
  const wrapper = document.createElement("div");
  wrapper.className = "pelicula-wrapper";

  const card = document.createElement("div");
  card.className = "pelicula-card";

  const claseClasificacion =
    CONFIG.CLASIFICACIONES[pelicula.clasificacion] || "";

  card.innerHTML = generarHTMLPeliculaCard(pelicula, claseClasificacion);
  wrapper.appendChild(card);

  if (pelicula.estreno || pelicula.reestreno) {
    agregarSolapaEstreno(wrapper, pelicula);
  }

  return wrapper;
}

function generarHTMLPeliculaCard(pelicula, claseClasificacion) {
  return `
    <div class="pelicula-imagen">
      <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
      ${
        pelicula.destacado
          ? '<div class="destacado-icon"><i class="fa-regular fa-face-smile fa-lg"></i></div>'
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
}

function agregarSolapaEstreno(wrapper, pelicula) {
  const solapa = document.createElement("div");
  solapa.className = "pelicula-solapa";

  let contenidoSolapa = "";
  if (pelicula.estreno && pelicula.reestreno) {
    contenidoSolapa = '<span class="estreno">Estreno</span><span class="reestreno">Re-Estreno</span>';
  } else if (pelicula.estreno) {
    contenidoSolapa = '<span class="estreno">Estreno</span>';
  } else if (pelicula.reestreno) {
    contenidoSolapa = '<span class="reestreno">Re-Estreno</span>';
  }

  solapa.innerHTML = contenidoSolapa;
  wrapper.appendChild(solapa);
  wrapper.classList.add("tiene-solapa");
}
function mostrarMasPeliculas() {
  const peliculasRestantes = estado.peliculasCartelera.length - estado.peliculasMostradas;
  const cantidadAMostrar = Math.min(CONFIG.PELICULAS_POR_CARGA, peliculasRestantes);

  for (let i = 0; i < cantidadAMostrar; i++) {
    if (estado.peliculasMostradas < estado.peliculasCartelera.length) {
      const pelicula = estado.peliculasCartelera[estado.peliculasMostradas];
      const card = crearPeliculaCard(pelicula);
      elementosDOM.peliculasContainer.appendChild(card);
      estado.peliculasMostradas++;
    }
  }

  actualizarEstadoBoton();
  actualizarClasesPreventa();
}

function inicializarCartelera() {
  elementosDOM.peliculasContainer.innerHTML = "";
  estado.peliculasMostradas = 0;

  const cantidadInicial = Math.min(
    CONFIG.PELICULAS_INICIALES,
    estado.peliculasCartelera.length
  );
  
  for (let i = 0; i < cantidadInicial; i++) {
    const pelicula = estado.peliculasCartelera[i];
    const card = crearPeliculaCard(pelicula);
    elementosDOM.peliculasContainer.appendChild(card);
    estado.peliculasMostradas++;
  }

  actualizarVisibilidadBoton();
  actualizarClasesPreventa();
}

function actualizarEstadoBoton() {
  if (estado.peliculasMostradas >= estado.peliculasCartelera.length) {
    estado.verMasBtn.style.display = "none";
    actualizarClasesPreventa();
  }
}

function actualizarVisibilidadBoton() {
  if (estado.peliculasCartelera.length > CONFIG.PELICULAS_INICIALES) {
    estado.verMasBtn.style.display = "flex";
  } else {
    estado.verMasBtn.style.display = "none";
  }
}

function actualizarClasesPreventa() {
  if (!elementosDOM.sectionPreventa) return;

  if (estado.peliculasMostradas >= estado.peliculasCartelera.length) {
    elementosDOM.sectionPreventa.classList.remove("con-boton");
    elementosDOM.sectionPreventa.classList.add("sin-boton");
  } else if (estado.peliculasCartelera.length > CONFIG.PELICULAS_INICIALES) {
    elementosDOM.sectionPreventa.classList.remove("con-boton");
  } else {
    elementosDOM.sectionPreventa.classList.add("sin-boton");
  }
}

document.addEventListener("DOMContentLoaded", inicializarAplicacion);