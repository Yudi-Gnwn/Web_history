document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.film-item img');
  
    images.forEach(img => {
      img.addEventListener('mouseover', () => {
        img.style.transition = 'transform 0.3s';
        img.style.transform = 'scale(1.1)';
      });
  
      img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
      });
    });
  });
  