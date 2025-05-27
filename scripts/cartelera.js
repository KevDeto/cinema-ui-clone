import { peliculas } from './peliculas.js';

const peliculasCartelera = peliculas.filter(p => p);

const peliculasContainer = document.getElementById('peliculas-container');
const verMasBtn = document.getElementById('ver-mas-btn');

const peliculasPorPagina = 15;
let peliculasMostradas = 0;

function crearPeliculaCard(peliculasCartelera) {
    const wrapper = document.createElement('div');
    wrapper.className = 'pelicula-wrapper';

    const card = document.createElement('div');
    card.className = 'pelicula-card';

    const clasesClasificacion = {
        'ATP': 'clasificacion-atp',
        '+13': 'clasificacion-13',
        '+16': 'clasificacion-16',
        'R': 'clasificacion-r'
    };
    const claseClasificacion = clasesClasificacion[peliculasCartelera.clasificacion] || '';

    card.innerHTML = `
        <div class="pelicula-imagen">
            <img src="${peliculasCartelera.imagen}" alt="${peliculasCartelera.titulo}">
            ${peliculasCartelera.destacado ? '<div class="destacado-icon"><i class="fa-regular fa-face-smile fa-lg"></i></div> ' : ''}
            <div class="pelicula-duracion">
                <span>${peliculasCartelera.duracion}</span>
            </div>
        </div>
        <div class="pelicula-info">
            <div class="pelicula-titulo">
                <h3>${peliculasCartelera.titulo}</h3>
                <div class="clasificacion pelicula-${claseClasificacion}">
                    <span>${peliculasCartelera.clasificacion}</span>
                </div>
            </div>
            <div class="pelicula-detalles">
                <p>${peliculasCartelera.formato}</p>
            </div>
        </div>
    `;

    wrapper.appendChild(card);

    if (peliculasCartelera.estreno || peliculasCartelera.reestreno) {
        const solapa = document.createElement('div');
        solapa.className = 'pelicula-solapa';

        let contenidoSolapa = '';
        if (peliculasCartelera.estreno && peliculasCartelera.reestreno) {
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

function mostrarPeliculas(cantidad) {
    const peliculasAMostrar = peliculasCartelera.slice(peliculasMostradas, peliculasMostradas + cantidad);

    peliculasAMostrar.forEach(pelicula => {
        const wrapper = crearPeliculaCard(pelicula);
        peliculasContainer.appendChild(wrapper);
    });

    peliculasMostradas += peliculasAMostrar.length;

    if (peliculasMostradas >= peliculasCartelera.length) {
        verMasBtn.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarPeliculas(peliculasPorPagina);
});

verMasBtn.addEventListener('click', () => {
    mostrarPeliculas(peliculasPorPagina);
});
