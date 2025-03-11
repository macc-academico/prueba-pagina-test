let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

function showContent(answer) {
    if (answer) {
        document.getElementById('initialScreen').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        startCarouselAutoplay();
    }
}

function moveButton(button) {
    const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.position = 'fixed';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function moveCarousel(direction) {
    updateCarousel((currentSlide + direction + totalSlides) % totalSlides);
}

function setCarousel(index) {
    updateCarousel(index);
}

function updateCarousel(newIndex) {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    items[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = newIndex;
    
    items[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function startCarouselAutoplay() {
    setInterval(() => {
        moveCarousel(1);
    }, 5000); // Cambia de imagen cada 5 segundos
}

// Inicializar el carrusel
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    if (items.length > 0) {
        items[0].classList.add('active');
    }
    if (dots.length > 0) {
        dots[0].classList.add('active');
    }
});

// Función para las tarjetas de rosas
document.addEventListener('DOMContentLoaded', function() {
    const roseCards = document.querySelectorAll('.rose-card');
    
    roseCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Toggle active state
            this.classList.toggle('active');
            
            // Create sparkles
            createSparkles(e, this);
            
            // Remove active class after animation
            setTimeout(() => {
                this.classList.remove('active');
            }, 1000);
        });
    });
});

function createSparkles(e, element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Calculate random position relative to click
        const angle = (i / 12) * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        sparkle.style.left = `${centerX - rect.left}px`;
        sparkle.style.top = `${centerY - rect.top}px`;
        sparkle.style.setProperty('--tx', `${tx}px`);
        sparkle.style.setProperty('--ty', `${ty}px`);
        
        element.appendChild(sparkle);
        
        // Animate the sparkle
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        
        // Remove sparkle after animation
        setTimeout(() => {
            element.removeChild(sparkle);
        }, 1000);
    }
}