document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    // Set the current year in the footer
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Set the last modified date in the footer
    document.getElementById("lastModified").querySelector(".highlight").textContent = document.lastModified;
});
