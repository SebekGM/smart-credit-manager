const modalOverlay = document.getElementById('modal-overlay');
const creditBtn = document.querySelectorAll('#new-credit-btn');
const modalCloseBtn = document.querySelectorAll('#modal-overlay-close-btn');

// open modal
creditBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
    });
});

// close 'x' or 'anuluj' btn
modalCloseBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });
});

// close to click around modal
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// close to click 'Esc' btn on keydown
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
    }
});


// change category of credit
const category = document.querySelectorAll('#modal-category');

category.forEach(cat => {
    cat.addEventListener('click', () => {
        category.forEach(c => {
            c.classList.remove('active');
        });

        cat.classList.add('active');
    });
});