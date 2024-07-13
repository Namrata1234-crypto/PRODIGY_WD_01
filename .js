// script.js

// Get the navbar
const navbar = document.getElementById('navbar');

// Function to add or remove the 'scrolled' class based on scroll position
function onScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Event listener for scroll events
window.addEventListener('scroll', onScroll);

// Initialize the scroll effect
onScroll();
