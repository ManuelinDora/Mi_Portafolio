// =========================
// JS para portafolio MANU
// =========================

// --- Menú hamburguesa responsivo ---
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');

  if (navToggle && navbar) {
    navToggle.addEventListener('click', function () {
      navbar.classList.toggle('open');
      // Quitar scroll al abrir menú
      if (navbar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    // Cierra menú al hacer click fuera del navbar en móvil
    document.addEventListener('click', function (e) {
      if (
        navbar.classList.contains('open') &&
        !navbar.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        navbar.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // --- Animación de aparición para cards, blog y trayectoria ---
  function animarCards(selector) {
    document.querySelectorAll(selector).forEach(el => {
      const rect = el.getBoundingClientRect();
      if (
        rect.top < window.innerHeight - 30 &&
        rect.bottom > 0 &&
        !el.classList.contains('visible')
      ) {
        el.classList.add('visible');
      }
    });
  }
  function onScrollAnimarCards() {
    animarCards('.project-card');
    animarCards('.blog-entrada');
    animarCards('.trayectoria-box');
  }
  window.addEventListener('scroll', onScrollAnimarCards);
  onScrollAnimarCards();

  // --- Navegación: resalta sección activa en menú ---
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links li a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // --- Copiar email al portapapeles ---
  const copyBtn = document.getElementById("copyEmailBtn");
  const copyMsg = document.getElementById("copyMsg");

  if (copyBtn && copyMsg) {
    copyBtn.addEventListener("click", function () {
      const email = "manuel.dorantes.m@gmail.com";
      navigator.clipboard.writeText(email).then(function () {
        copyMsg.style.display = "inline-block";
        setTimeout(() => copyMsg.style.display = "none", 1800);
      });
    });
  }
});