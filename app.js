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