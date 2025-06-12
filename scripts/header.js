function initTabs() {
    const tabButtons = document.querySelectorAll('.navbar-container-1 button');

    function switchTab(event) {
        document.querySelectorAll('.navbar-container-1 li').forEach(li => {
            li.classList.remove('active');
        });

        const clickedButton = event.currentTarget;
        const parentLi = clickedButton.closest('li');
        parentLi.classList.add('active');

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

    if (tabButtons.length > 0) {
        const firstLi = tabButtons[0].closest('li');
        firstLi.classList.add('active');
        tabButtons[0].click();
    }
}

document.addEventListener('DOMContentLoaded', initTabs);