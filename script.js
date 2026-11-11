// Toggle del menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Filtrado de categorías en la carta
const categoryBtns = document.querySelectorAll('.category-btn');
const menuCards = document.querySelectorAll('.menu-card');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover clase active de todos los botones
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Agregar clase active al botón clickeado
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        menuCards.forEach(card => {
            if (category === 'todos' || card.getAttribute('data-category') === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Botones de pedido individual
const orderButtons = document.querySelectorAll('.btn-order');

orderButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.menu-card');
        const title = card.querySelector('.card-title').textContent;
        const price = card.querySelector('.price').textContent;
        
        const message = `Hola, me gustaría pedir: ${title} - ${price}`;
        const whatsappUrl = `https://wa.me/51900000000?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
    });
});

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('Don Rulo - Prototipo de Rediseño cargado correctamente');
