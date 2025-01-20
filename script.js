let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.product-card-expo');
    const totalSlides = slides.length;

    // Mise à jour de l'index actuel
    currentIndex += direction;

    // Si l'index est en dehors des limites, on le remet au début ou à la fin
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // Réinitialiser toutes les cartes à une opacité normale
    slides.forEach(slide => {
        slide.classList.remove('previous', 'next');
        slide.style.transform = 'scale(1)'; // Réinitialiser la taille
    });

    // Marquer l'élément précédent et suivant
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentIndex + 1) % totalSlides;

    slides[prevIndex].classList.add('previous');
    slides[nextIndex].classList.add('next');
    slides[nextIndex+1].classList.add('next');

    // Déplacer le carrousel
    const carousel = document.querySelector('.carousel');
    // L'index doit être multiplié par le pourcentage de chaque élément (80%)
    carousel.style.transform = `translateX(-${currentIndex * 50}%)`;
}

