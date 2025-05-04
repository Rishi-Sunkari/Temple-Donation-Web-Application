document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.service-item');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const prevBtn = document.querySelector('.carousel-nav.prev');
    const nextBtn = document.querySelector('.carousel-nav.next');
    
    let currentIndex = 0;
    
    // Create indicators
    items.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('carousel-indicator');
      if (index === 0) indicator.classList.add('active');
      indicator.addEventListener('click', () => goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });
    
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    // Update indicators and scroll position
    function updateCarousel() {
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
      
      const itemWidth = items[0].offsetWidth + 2; // width + gap
      track.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth'
      });
    }
    
    // Go to specific slide
    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }
    
    // Navigation functions
    function goPrev() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
      updateCarousel();
    }
    
    function goNext() {
      currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    }
    
    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', goPrev);
    if (nextBtn) nextBtn.addEventListener('click', goNext);
    
    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    });
    
    // Handle swipe on touch devices
    let startX, moveX;
    
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });
    
    track.addEventListener('touchmove', (e) => {
      moveX = e.touches[0].clientX;
    }, { passive: true });
    
    track.addEventListener('touchend', () => {
      if (startX - moveX > 50) goNext();
      if (moveX - startX > 50) goPrev();
    });
    
    // Responsive adjustments
    function handleResize() {
      const itemWidth = items[0].offsetWidth + 10;
      track.scrollLeft = currentIndex * itemWidth;
    }
    
    window.addEventListener('resize', handleResize);
  });

 
  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const toggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active');
    toggle.classList.toggle('active');
  }

  function handleNavClick() {
    const navLinks = document.getElementById('navLinks');
    if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
      toggleMenu(); // Close the sidebar on mobile
    }
  }

  ///rishi
  document.getElementById("donationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Optional - capture user values
    // const amount = document.getElementById("amount").value;
    // const email = document.getElementById("email").value;
    // const phone = document.getElementById("phone").value;
    // const purpose = document.getElementById("purpose").value;

    // Redirect to your Razorpay payment page
    window.location.href = "xx";
});
