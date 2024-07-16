// JavaScript for both index.html and gallery.html

document.addEventListener("DOMContentLoaded", function() {
    // Set current year in footer
    document.getElementById('currentyear').innerText = new Date().getFullYear();

    // Set last modification date in footer
    document.getElementById('lastModified').getElementsByTagName('span')[0].innerText = document.lastModified;

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

// Function to increment likes count
function incrementLikes(button) {
    const likesCount = button.nextElementSibling;
    likesCount.textContent = parseInt(likesCount.textContent) + 1;
}
