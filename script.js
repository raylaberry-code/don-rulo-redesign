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
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Animación de fade in para las tarjetas
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

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

// Cambio de estilo del header al hacer scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Animación de entrada para elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Agregar animación a las tarjetas del menú
menuCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Agregar animación a las tarjetas de ubicación
const locationCards = document.querySelectorAll('.location-card');
locationCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.2}s`;
    observer.observe(card);
});

// Agregar animación a los items de contacto
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.animationDelay = `${index * 0.2}s`;
    observer.observe(item);
});

// Animación fadeInUp
const fadeInUpStyle = document.createElement('style');
fadeInUpStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeInUpStyle);

console.log('Don Rulo - Prototipo de Rediseño cargado correctamente');
