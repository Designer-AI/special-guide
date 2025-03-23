document.addEventListener('DOMContentLoaded', () => {
    // Select the navigation element
    const nav = document.querySelector('nav');

    // Ensure the navigation element exists
    if (nav) {
        // Create the toggle button
        const navToggle = document.createElement('button');
        navToggle.textContent = '☰'; // Hamburger menu icon
        navToggle.classList.add('nav-toggle');

        // Add the toggle button to the navigation
        nav.prepend(navToggle);

        // Add click event listener to toggle the menu
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }
});