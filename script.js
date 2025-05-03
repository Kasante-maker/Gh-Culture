// Preloader
window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

// Collapsible sections (main content)
document.querySelectorAll(".toggle-btn").forEach(button => {
  const content = button.nextElementSibling;
  content.classList.remove("active"); // Start collapsed
  button.addEventListener("click", function() {
    content.classList.toggle("active");
  });
});

// Fun facts toggle
document.querySelectorAll(".fact-toggle").forEach(button => {
  const content = button.nextElementSibling;
  content.classList.remove("active"); // Start collapsed
  button.addEventListener("click", function() {
    content.classList.toggle("active");
  });
});

// Language sampler with audio
document.querySelectorAll(".speak").forEach(button => {
  button.addEventListener("click", function() {
    const audioId = this.getAttribute("data-audio");
    const audio = document.getElementById(audioId);
    if (audio) {
      audio.play();
    } else {
      const text = this.previousSibling.textContent;
      alert(`Pronouncing: "${text}" (Audio not available yet!)`);
    }
  });
});

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  alert(`Thank you, ${name}! Your message: "${message}" has been received. (Demo—no real email sent.)`);
  this.reset();
});

// Dark mode toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  const icon = this.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

// Smooth scrolling for Back to Top
document.getElementById("back-to-top").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Section fade-in animation
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));

// Search functionality
document.getElementById('search').addEventListener('input', function(e) {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll('section').forEach(section => {
    const text = section.textContent.toLowerCase();
    section.style.display = text.includes(term) ? 'block' : 'none';
  });
});