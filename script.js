// ===== Menú hamburguesa para móvil =====
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ===== Resalta el menú activo según scroll =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 80;
  sections.forEach((section, i) => {
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navItems.forEach(link => link.classList.remove('active'));
      navItems[i].classList.add('active');
    }
  });
});

// ===== Simulación de envío de formulario =====
document.querySelector('.contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('¡Gracias por tu mensaje! (Funcionalidad simulada)');
  this.reset();
});