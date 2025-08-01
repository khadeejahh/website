
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
  const container = slider.querySelector('.product-container');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');
  const cardWidth = 290;

  nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });
});

// ✅ Fixed scrollReviews function for review section
function scrollReviews(direction) {
  const slider = document.getElementById('reviewContainer'); // 🔄 was 'reviewSlider', corrected to match HTML
  const scrollAmount = 300; // adjust if needed
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle icon between ☰ and ✖
    if (navLinks.classList.contains('active')) {
      menuToggle.innerHTML = '&times;'; // ✖
    } else {
      menuToggle.innerHTML = '&#9776;'; // ☰
    }
  });

