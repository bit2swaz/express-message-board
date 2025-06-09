/**
 * Mini Message Board - Main JavaScript
 * Handles animations and interactive elements
 */

document.addEventListener('DOMContentLoaded', () => {
  // Staggered animation for message cards
  const messageCards = document.querySelectorAll('.message-card');
  if (messageCards.length > 0) {
    messageCards.forEach((card, index) => {
      // Reset the animation that was applied in CSS
      card.style.animation = 'none';
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      // Apply staggered animations
      setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 * index); // Stagger by 100ms per card
    });
  }

  // Form input animation
  const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
  formInputs.forEach(input => {
    // Add focus class to parent when input is focused
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('input-focused');
    });
    
    // Remove focus class when input loses focus
    input.addEventListener('blur', () => {
      if (input.value.trim() === '') {
        input.parentElement.classList.remove('input-focused');
      }
    });
    
    // Check if input has value on page load
    if (input.value.trim() !== '') {
      input.parentElement.classList.add('input-focused');
    }
  });

  // Smooth page transitions
  const links = document.querySelectorAll('a:not([target="_blank"])');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // Skip if modifier keys are pressed
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      
      // Only apply to internal links
      const href = link.getAttribute('href');
      if (href.startsWith('/') || href.startsWith(window.location.origin)) {
        e.preventDefault();
        
        // Fade out
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
        
        // Navigate after fade out
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      }
    });
  });

  // Fade in page on load
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 50);
}); 