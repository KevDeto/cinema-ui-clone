import { peliculas } from './peliculas.js';

const peliculasPreventa = peliculas.filter(p => p.preventa);

const preventaContainer = document.getElementById('proximos-container');

function crearSlidePelicula(pelicula) {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

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
                <p>${pelicula.fecha}</p>
            </div>
        </div>
    `;

    slide.appendChild(card);

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