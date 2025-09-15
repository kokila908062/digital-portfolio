document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Message sent! (This is just a demo.)');
});
