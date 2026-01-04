
let cartCount = 0;

function addToCart() {
  cartCount++;
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = cartCount);
}

function validateForm() {
  const email = document.getElementById('email').value;
  if (!email.includes('@')) {
    alert('Please enter a valid email.');
    return false;
  }
  alert('Message sent successfully!');
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  const greetingEl = document.getElementById('greeting');
  const dateEl = document.getElementById('date');
  if (greetingEl && dateEl) {
    const hour = new Date().getHours();
    let greeting = 'Good evening';
    if (hour < 12) greeting = 'Good morning';
    else if (hour < 18) greeting = 'Good afternoon';
    greetingEl.textContent = greeting;
    dateEl.textContent = new Date().toDateString();
  }

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
  }
});
