// Select DOM elements
const nav = document.querySelector('nav');
const navToggle = document.createElement('button');

// Add a toggle button for the navigation menu
navToggle.textContent = '☰'; // Hamburger menu icon
navToggle.classList.add('nav-toggle');
nav.prepend(navToggle);

// Toggle the navigation menu on smaller screens
navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});