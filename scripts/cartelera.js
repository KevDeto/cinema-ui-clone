const peliculas = [
    {
        id: 1,
        titulo: "DESTINO FINAL LAZOS DE SANGRE",
        imagen: "image/cartelera/destino-final.jpg",
        clasificacion: "+16",
        formato: "2D · 4D E-MOTION · D-BOX · PREMIUM CLASS · XD DIGITAL · COMFORT",
        destacado: true,
        duracion: "1h 50m",
        estreno: true,
        reestreno: false
    },
    {
        id: 2,
        titulo: "THUNDERBOLTS",
        imagen: "image/cartelera/thunderbolts.jpg",
        clasificacion: "+13",
        formato: "3D · 4D E-MOTION · COMFORT · D-BOX · 2D · PREMIUM CLASS",
        destacado: true,
        duracion: "2h 16m",
        estreno: false,
        reestreno: false
    },
    {
        id: 3,
        titulo: "KARATE KID LEYENDAS",
        imagen: "image/cartelera/karate-kid.jpg",
        clasificacion: "+13",
        formato: "2D",
        destacado: true,
        duracion: "1h 33m",
        estreno: false,
        reestreno: false

    },
    {
        id: 4,
        titulo: "UNA PELICULA DE MINECRAFT",
        imagen: "image/cartelera/minecraft.jpg",
        clasificacion: "ATP",
        formato: "3D · 2D",
        destacado: true,
        duracion: "1h 41m",
        estreno: false,
        reestreno: false
    },
    {
        id: 5,
        titulo: "MAZEL TOV",
        imagen: "image/cartelera/mazel-tov.jpg",
        clasificacion: "+13",
        formato: "2D · PREMIUM CLASS",
        destacado: true,
        duracion: "1h 37m",
        estreno: false,
        reestreno: false
    },
    {
        id: 6,
        titulo: "COLORFUL STAGE! MIKU NO PUEDE CANTAR",
        imagen: "image/cartelera/miku.jpg",
        clasificacion: "ATP",
        formato: "2D",
        destacado: false,
        duracion: "1h 45m",
        estreno: true,
        reestreno: false
    },
    {
        id: 7,
        titulo: "LA LEYENDA DE OCHI",
        imagen: "image/cartelera/leyenda-ochi.jpg",
        clasificacion: "ATP",
        formato: "2D",
        destacado: false,
        duracion: "1h 24m",
        estreno: true,
        reestreno: false
    },
    {
        id: 8,
        titulo: "GLORIA",
        imagen: "image/cartelera/gloria.jpg",
        clasificacion: "+13",
        formato: "2D",
        destacado: false,
        duracion: "1h 46m",
        estreno: true,
        reestreno: false
    },
    {
        id: 9,
        titulo: "EL ROBO DEL SIGLO (2020)",
        imagen: "image/cartelera/robo-siglo.jpg",
        clasificacion: "+13",
        formato: "2D",
        destacado: false,
        duracion: "1h 54m",
        estreno: true,
        reestreno: true
    },
    {
        id: 10,
        titulo: "ESPERANDO LA CARROZA (1985)",
        imagen: "image/cartelera/esperando-carroza.jpg",
        clasificacion: "ATP",
        formato: "2D",
        destacado: false,
        duracion: "1h 34m"
    },
    {
        id: 11,
        titulo: "ENCERRADO",
        imagen: "image/cartelera/encerrado.jpg",
        clasificacion: "+16",
        formato: "2D",
        destacado: false,
        duracion: "1h 35m"
    },
    {
        id: 12,
        titulo: "UNTIL DAWN NOCHE DE TERROR",
        imagen: "image/cartelera/until-dawn.jpg",
        clasificacion: "+16",
        formato: "2D",
        destacado: false,
        duracion: "1h 43m"
    },
    {
        id: 13,
        titulo: "EL CONTADOR 2",
        imagen: "image/cartelera/contador.jpg",
        clasificacion: "+16",
        formato: "2D",
        destacado: false,
        duracion: "2h 12m"
    },
    {
        id: 13,
        titulo: "PECADORES",
        imagen: "image/cartelera/pecadores.jpg",
        clasificacion: "+13",
        formato: "2D",
        destacado: false,
        duracion: "2h 18m"
    },
    {
        id: 14,
        titulo: "BLANCA NIEVES",
        imagen: "image/cartelera/blanca-nieves.jpg",
        clasificacion: "ATP",
        formato: "2D",
        destacado: false,
        duracion: "1h 46m"
    }
];

const peliculasContainer = document.getElementById('peliculas-container');
const verMasBtn = document.getElementById('ver-mas-btn');

// Configuración
const peliculasPorPagina = 15;
let peliculasMostradas = 0;

// Función para crear una card
function crearPeliculaCard(pelicula) {
    // Creamos un contenedor wrapper que agrupará la card y la solapa
    const wrapper = document.createElement('div');
    wrapper.className = 'pelicula-wrapper'; // Esta clase manejará el posicionamiento
    
    // Creamos la card como antes
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
            ${pelicula.destacado ? '<div class="destacado-icon"><i class="fa-regular fa-face-smile fa-lg"></i></div> ' : ''}
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

    // Crear solapa solo si es necesario
    if (pelicula.estreno || pelicula.reestreno) {
        const solapa = document.createElement('div');
        solapa.className = 'pelicula-solapa';
        
        // Versión corregida que maneja ambos casos
        let contenidoSolapa = '';
        if (pelicula.estreno && pelicula.reestreno) {
            contenidoSolapa = '<span class="estreno">Estreno</span><span class="reestreno">Re-Estreno</span>';
        } else if (pelicula.estreno) {
            contenidoSolapa = '<span class="estreno">Estreno</span>';
        } else if (pelicula.reestreno) {
            contenidoSolapa = '<span class="reestreno">Re-Estreno</span>';
        }
        
        solapa.innerHTML = contenidoSolapa;
        wrapper.appendChild(solapa);
        wrapper.classList.add('tiene-solapa');
    }

    return wrapper;
}

// Función para mostrar películas
function mostrarPeliculas(cantidad) {
    const peliculasAMostrar = peliculas.slice(peliculasMostradas, peliculasMostradas + cantidad);

    peliculasAMostrar.forEach(pelicula => {
        const wrapper = crearPeliculaCard(pelicula);
        peliculasContainer.appendChild(wrapper);
    });

    peliculasMostradas += peliculasAMostrar.length;

    // Ocultar botón si no hay más películas por mostrar
    if (peliculasMostradas >= peliculas.length) {
        verMasBtn.style.display = 'none';
    }
}

// Mostrar las primeras películas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarPeliculas(peliculasPorPagina);
});

// Evento para el botón "Ver más"
verMasBtn.addEventListener('click', () => {
    mostrarPeliculas(peliculasPorPagina);
});

/*=========================================== */
// Función para manejar el selector de ubicaciones
/* function initUbicaciones() {
    const elegirCineBtn = document.querySelector('.navbar-container-2 button:first-child');
    const ubicacionesPanel = document.getElementById('ubicaciones-panel');
    const cerrarBtn = document.getElementById('cerrar-ubicaciones');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Almacenamiento local para recordar la ubicación
    let ubicacionSeleccionada = localStorage.getItem('ubicacionCine') || null;

    // Actualizar el texto del botón si hay ubicación guardada
    if (ubicacionSeleccionada) {
        updateBotonUbicacion(elegirCineBtn, ubicacionSeleccionada);
    }

    // Abrir panel
    elegirCineBtn.addEventListener('click', () => {
        ubicacionesPanel.classList.add('visible');
        overlay.classList.add('visible');
    });

    // Cerrar panel
    cerrarBtn.addEventListener('click', cerrarPanel);
    overlay.addEventListener('click', cerrarPanel);

    // Seleccionar ubicación
    document.querySelectorAll('.ubicacion-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const ubicacion = this.getAttribute('data-ubicacion');
            ubicacionSeleccionada = ubicacion;
            
            // Actualizar botón
            updateBotonUbicacion(elegirCineBtn, ubicacion);
            
            // Guardar en localStorage
            localStorage.setItem('ubicacionCine', ubicacion);
            
            // Cerrar panel
            cerrarPanel();
            
            // Aquí puedes añadir lógica adicional como cargar horarios, etc.
            console.log(`Ubicación seleccionada: ${ubicacion}`);
        });
    });

    function cerrarPanel() {
        ubicacionesPanel.classList.remove('visible');
        overlay.classList.remove('visible');
    }

    function updateBotonUbicacion(boton, ubicacion) {
        const iconoLocation = boton.querySelector('.fa-location-dot');
        const iconoCaret = boton.querySelector('.fa-caret-down');
        
        boton.innerHTML = '';
        if (iconoLocation) boton.appendChild(iconoLocation);
        boton.appendChild(document.createTextNode(ubicacion));
        if (iconoCaret) boton.appendChild(iconoCaret);
    }
}

// Añade esta línea al final de tu DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initUbicaciones();
}); */