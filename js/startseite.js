document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.bt_carousel-items');
  const items = document.querySelectorAll('.bt_carousel-item');
  const totalItems = items.length;
  const itemWidth = items[0].clientWidth;
  let currentIndex = 0;

  document.querySelector('.carousel-button.left').addEventListener('click', function() {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = totalItems - 1; // Loop back to the last item
      }
      updateCarousel();
  });

  document.querySelector('.carousel-button.right').addEventListener('click', function() {
      if (currentIndex < totalItems - 1) {
          currentIndex++;
      } else {
          currentIndex = 0; // Loop back to the first item
      }
      updateCarousel();
  });

  function updateCarousel() {
      const newTransform = -currentIndex * itemWidth;
      carousel.style.transform = `translateX(${newTransform}px)`;
  }
});
