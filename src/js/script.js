

document.addEventListener('DOMContentLoaded', () => {
    const mainSection = document.querySelector('.main-section');
    
    if (mainSection) {
      mainSection.style.opacity = 0;
      mainSection.offsetHeight;
      // Cambia la opacidad a 1 para lograr un fade-in
      mainSection.style.transition = 'opacity 1s ease-in';
      mainSection.style.opacity = 1;
    }
  });




