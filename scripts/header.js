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