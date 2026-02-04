document.addEventListener("DOMContentLoaded", function () {
 const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  const dropdownLinks = document.querySelectorAll(".has-dropdown > a");

  dropdownLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        this.parentElement.classList.toggle("active");
      }
    });
  });

  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  if (testimonials.length === 0 || dots.length === 0) return;

  let index = 0;
  let timer = null;

  function showSlide(i) {
    testimonials.forEach(t => t.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    testimonials[i].classList.add("active");
    dots[i].classList.add("active");
  }

  function startSlider() {
    timer = setInterval(() => {
      index = (index + 1) % testimonials.length;
      showSlide(index);
    }, 4000);
  }

  showSlide(index);
  startSlider();

  dots.forEach((dot, i) => {
    dot.addEventListener("click", function () {
      clearInterval(timer);
      index = i;
      showSlide(index);
      startSlider();
    });
  });

});

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");

  let index = 0;
  let interval;

  if (!testimonials.length || !dots.length) return;

  function showTestimonial(i) {
    testimonials.forEach(t => t.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    testimonials[i].classList.add("active");
    dots[i].classList.add("active");
  }

  function startAutoSlide() {
    interval = setInterval(() => {
      index = (index + 1) % testimonials.length;
      showTestimonial(index);
    }, 4000); 
  }

  showTestimonial(index);
  startAutoSlide();
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      clearInterval(interval);
      index = i;
      showTestimonial(index);
      startAutoSlide();
    });
  });
});
