import { peliculas } from './peliculas.js';

const CONFIG = {
  CLASIFICACIONES: {
    'ATP': 'clasificacion-atp',
    '+13': 'clasificacion-13',
    '+16': 'clasificacion-16',
    'R': 'clasificacion-r'
  }
};

const estado = {
  peliculasProximos: []
};

const elementosDOM = {
  proximosContainer: document.getElementById('proximos-container')
};

function inicializarProximosEstrenos() {
  estado.peliculasProximos = peliculas.filter(p => p.proximoEstreno);
  renderizarProximosEstrenos();
}

function renderizarProximosEstrenos() {
  if (!elementosDOM.proximosContainer) return;
  
  elementosDOM.proximosContainer.innerHTML = '';
  
  estado.peliculasProximos.forEach(pelicula => {
    const slide = crearSlidePelicula(pelicula);
    elementosDOM.proximosContainer.appendChild(slide);
  });
}

function crearSlidePelicula(pelicula) {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  
  const card = document.createElement('div');
  card.className = 'pelicula-card';
  card.innerHTML = generarHTMLProximoEstreno(pelicula);
  
  slide.appendChild(card);
  return slide;
}

function generarHTMLProximoEstreno(pelicula) {
  const claseClasificacion = CONFIG.CLASIFICACIONES[pelicula.clasificacion] || '';
  
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
        <p>${pelicula.fecha}</p>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', inicializarProximosEstrenos);