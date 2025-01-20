let currentIndex = 1;

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
        slide.classList.remove('previous', 'next', 'active');
        slide.style.transform = 'scale(1)'; // Réinitialiser la taille
    });

    // Marquer l'élément actuel, précédent et suivant
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentIndex + 1) % totalSlides;

    // Marquer les éléments adjacents
    slides[prevIndex].classList.add('previous');
    slides[nextIndex].classList.add('next');

    // Marquer l'élément du milieu
    slides[currentIndex].classList.add('active');

    // Déplacer le carrousel
    if(currentIndex%3==0){
        const carousel = document.querySelector('.carousel');
        carousel.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    }
}
