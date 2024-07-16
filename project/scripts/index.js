document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("open");
    });

    // Set the current year in the footer
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Set the last modified date in the footer
    document.getElementById("lastModified").querySelector(".highlight").textContent = document.lastModified;

    // Function to handle filtering logic (sample function, adjust as needed)
    function filterContent(criteria) {
        // Placeholder function to handle filtering content
        console.log(`Filtering content based on: ${criteria}`);
    }

    // Event listeners for nav menu links (sample, adjust for your needs)
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const filterCriteria = this.getAttribute("data-filter");
            filterContent(filterCriteria);
        });
    });
});
