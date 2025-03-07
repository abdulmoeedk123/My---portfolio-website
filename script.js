// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
