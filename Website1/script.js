/* SIDEBAR CODE */
const toggleButton = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('close-sidebar');
const overlay = document.getElementById('overlay');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

/* THEME TOGGLE CODE */
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save new theme state
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
});

//FOR LOADING SAVED THEME
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
    }
});
/*THEME CODE ENDS HERE*/



