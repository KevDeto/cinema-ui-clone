import { peliculas } from './peliculas.js';

// Filtrar películas en preventa (asegúrate de que tus películas tengan propiedad preventa: true)
const peliculasPreventa = peliculas.filter(p => p.preventa);

// Obtener contenedor Swiper
const preventaContainer = document.getElementById('preventa-container');

// Función para crear slides de Swiper
function crearSlidePelicula(pelicula) {  // Cambié el nombre del parámetro a singular
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';  // Clase requerida por Swiper

    const card = document.createElement('div');
    card.className = 'pelicula-card';

    const clasesClasificacion = {
        'ATP': 'clasificacion-atp',
        '+13': 'clasificacion-13',
        '+16': 'clasificacion-16',
        'R': 'clasificacion-r'
    };
    const claseClasificacion = clasesClasificacion[pelicula.clasificacion] || '';

    card.innerHTML = `
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

    slide.appendChild(card);

    // Solapa para estrenos/reestrenos
    if (pelicula.estreno || pelicula.reestreno) {
        const solapa = document.createElement('div');
        solapa.className = 'pelicula-solapa';

        let contenido = '';
        if (pelicula.alternativo) {
            contenido = '<span class="alternativo">Contenido Alternativo</span>';
        }

        solapa.innerHTML = contenido;
        slide.appendChild(solapa);
    }

    return slide;
}

// Función para inicializar el slider
function inicializarPreventa() {
    // Limpiar contenedor primero
    preventaContainer.innerHTML = '';

    // Agregar todas las películas de preventa
    peliculasPreventa.forEach(pelicula => {
        const slide = crearSlidePelicula(pelicula);
        preventaContainer.appendChild(slide);
    });


}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', inicializarPreventa);
/* import { peliculas } from "./peliculas.js";

const peliculasPreventa = peliculas.filter(p => p);
const swiperPelicula = document.getElementById('preventa-container');

function crearSlideCard(peliculasPreventa) {
    const wrapper = document.createElement('div');
    wrapper.className = 'swiper-slide';

    const claseClasificacion = elegirClasificacion(peliculasPreventa.clasificacion);

    card.innerHTML = `
        <div class="pelicula-imagen">
            <img src="${peliculasPreventa.imagen}" alt="${peliculasPreventa.titulo}">
            ${peliculasPreventa.destacado ? '<div class="destacado-icon"><i class="fa-regular fa-face-smile fa-lg"></i></div> ' : ''}
            <div class="pelicula-duracion">
                <span>${peliculasPreventa.duracion}</span>
            </div>
        </div>
        <div class="pelicula-info">
            <div class="pelicula-titulo">
                <h3>${peliculasPreventa.titulo}</h3>
                <div class="clasificacion pelicula-${claseClasificacion}">
                    <span>${peliculasPreventa.clasificacion}</span>
                </div>
            </div>
            <div class="pelicula-detalles">
                <p>${peliculasPreventa.formato}</p>
            </div>
        </div>
    `;

    wrapper.appendChild(wrapper);

    if (peliculasPreventa.estreno || peliculasPreventa.reestreno) {
        const solapa = document.createElement('div');
        solapa.className = 'pelicula-solapa';

        // Versión corregida que maneja ambos casos
        let contenidoSolapa = '';
        if (peliculasPreventa.estreno && peliculasPreventa.reestreno) {
            contenidoSolapa = '<span class="estreno">Estreno</span><span class="reestreno">Re-Estreno</span>';
        } else if (peliculasCartelera.estreno) {
            contenidoSolapa = '<span class="estreno">Estreno</span>';
        } else if (peliculasCartelera.reestreno) {
            contenidoSolapa = '<span class="reestreno">Re-Estreno</span>';
        }

        solapa.innerHTML = contenidoSolapa;
        wrapper.appendChild(solapa);
        wrapper.classList.add('tiene-solapa');
    }

    return wrapper;

}
function elegirClasificacion(peliculaClasificacion) {
    const clasesClasificacion = {
        'ATP': 'clasificacion-atp',
        '+13': 'clasificacion-13',
        '+16': 'clasificacion-16',
        'R': 'clasificacion-r'
    };

    return clasesClasificacion[peliculaClasificacion] || '';
}

function mostrarPeliculas() {
    const peliculasAMostrar = peliculasPreventa.slice(peliculasMostradas, peliculasMostradas);

    peliculasAMostrar.forEach(pelicula => {
        const wrapper = crearSlideCard(pelicula);
        swiperPelicula.appendChild(wrapper);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarPeliculas();
}); */