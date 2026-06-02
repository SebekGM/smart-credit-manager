const modalOverlay = document.getElementById('modal-overlay');
const creditBtn = document.getElementById('new-credit-btn');
const modalCloseBtn = document.getElementById('modal-overlay-close-btn');

creditBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

modalCloseBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
    }
});