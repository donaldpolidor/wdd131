document.addEventListener("DOMContentLoaded", function() {
    // Set current year in footer
    document.getElementById('currentyear').innerText = new Date().getFullYear();

    // Set last modification date in footer
    document.getElementById('lastModified').getElementsByTagName('span')[0].innerText = document.lastModified;

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
});

// Function to increment likes count
function incrementLikes(button) {
    const likesCount = button.nextElementSibling;
    likesCount.textContent = parseInt(likesCount.textContent) + 1;
}

document.addEventListener("DOMContentLoaded", function() {
    // Select all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');

    // Options for the IntersectionObserver
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Callback function to handle intersection
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Load the actual image
                img.removeAttribute('data-src'); // Remove the data-src attribute
                observer.unobserve(img); // Stop observing this image
            }
        });
    }

    // Create an IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe each lazy image
    lazyImages.forEach(image => {
        observer.observe(image);
    });
});


// rating.js

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.rating span');
    const ratingValue = document.getElementById('ratingValue');

    stars.forEach((star) => {
        star.addEventListener('click', function() {
            const value = parseInt(star.dataset.value);

            // Reset all stars
            stars.forEach((s) => s.classList.remove('active'));

            // Activate selected stars
            for (let i = 0; i < value; i++) {
                stars[i].classList.add('active');
            }

            // Set the rating value in hidden input
            ratingValue.value = value;
        });
    });

    const form = document.getElementById('ratingForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // You can add form validation logic here
        // For example, validate required fields

        // Example: Save to localStorage (if needed)
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData.entries());
        localStorage.setItem('ratingFormData', JSON.stringify(formDataObj));

        alert('Thank you for your feedback!');
        form.reset(); // Clear the form after submission
    });
});
