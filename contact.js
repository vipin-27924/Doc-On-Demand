document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

   formFeedback.textContent = 'Thank you for your message! We will get back to you shortly.';
      formFeedback.style.color = 'green';

      contactForm.reset();
  });
})