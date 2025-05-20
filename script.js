function initTabs() {
    const tabButtons = document.querySelectorAll('.navbar-container-1 button');

    function switchTab(event) {
        // Remover clase active de todos los li
        document.querySelectorAll('.navbar-container-1 li').forEach(li => {
            li.classList.remove('active');
        });

        // Añadir clase active al li padre
        const clickedButton = event.currentTarget;
        const parentLi = clickedButton.closest('li');
        parentLi.classList.add('active');

        // Manejo del contenido (igual que antes)
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        const buttonText = clickedButton.textContent.trim().toLowerCase().replace(/\s+/g, '-');
        const contentId = `${buttonText}-content`;
        const contentToShow = document.getElementById(contentId);

        if (contentToShow) {
            contentToShow.classList.add('active');
        }
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });

    // Activar primer tab por defecto
    if (tabButtons.length > 0) {
        const firstLi = tabButtons[0].closest('li');
        firstLi.classList.add('active');
        tabButtons[0].click();
    }
}

document.addEventListener('DOMContentLoaded', initTabs);

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,/* si coloco 4 se desabilita el swiper, podria usar esto para responsive */
    direction: 'horizontal',
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 4500,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
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