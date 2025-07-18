// Modal para imágenes de proyectos

// document.querySelectorAll('.project-card img').forEach(img => {
  // img.style.cursor = 'pointer';
  // img.addEventListener('click', function() {
    // const modal = document.getElementById('projectImgModal');
    // const modalImg = document.getElementById('imgModalContent');
    // modal.style.display = 'flex';
    // modalImg.src = img.src;
    // modalImg.alt = img.alt;
    // document.body.style.overflow = 'hidden'; // Evita scroll de fondo
  // });
// });

// Hover de cars en de proyectos
document.querySelector('.close-modal').onclick = function() {
  document.getElementById('projectImgModal').style.display = 'none';
  document.body.style.overflow = ''; 
};
document.getElementById('projectImgModal').onclick = function(e) {
  if (e.target === this) {
    this.style.display = 'none';
    document.body.style.overflow = '';
  }
};


// Animación de barra de skills al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
  // Animar skills
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  skillBars.forEach(bar => {
    const width = bar.getAttribute('style').match(/width:\s*([0-9.]+)%/)[1];
    bar.style.setProperty('--final-width', width + '%');
    bar.style.width = '0';
  });

  function animarSkillsEnVista() {
    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (
        rect.top < window.innerHeight - 60 &&
        rect.bottom > 0 &&
        !bar.classList.contains('animated')
      ) {
        bar.classList.add('animated');
        bar.style.width = '';
      }
    });
  }
  window.addEventListener('scroll', animarSkillsEnVista);
  animarSkillsEnVista();

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

  // Navegación: resalta sección activa en menú
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
});



// Copiar email al portapapeles
document.addEventListener("DOMContentLoaded", function() {
  // ... tu código de animación y navegación ...

  // Copiar email al portapapeles
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