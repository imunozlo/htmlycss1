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
document.addEventListener("DOMContentLoaded", function() {
      const lazyImages = document.querySelectorAll(".lazy-image");
      
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const image = entry.target;
              image.src = image.dataset.src;
              image.classList.add("loaded");
              imageObserver.unobserve(image);
            }
          });
        });
        
        lazyImages.forEach(function(image) {
          imageObserver.observe(image);
        });
      } else {
        // Fallback para navegadores que no soportan Intersection Observer
        lazyImages.forEach(function(image) {
          image.src = image.dataset.src;
        });
      }
    });
