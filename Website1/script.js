const toggleButton = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('close-sidebar');
const overlay =getElementById('overlay');

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

