const btnMobileMenu = document.getElementById('btn-hamburger');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebar = document.getElementById('sidebar');

btnMobileMenu.addEventListener('click', () => {
    sidebarOverlay.classList.add('active');
    sidebar.classList.add('active');
});

sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});