// scripts/filtered-temples.js

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

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Add more temple objects here...
    ];

    function displayTemples(filteredTemples) {
        const gallery = document.getElementById("gallery");
        gallery.innerHTML = "";
        filteredTemples.forEach(temple => {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = "lazy";

            const figcaption = document.createElement("figcaption");
            figcaption.innerHTML = `<strong>${temple.templeName}</strong><br>${temple.location}<br>Dedicated: ${temple.dedicated}<br>Area: ${temple.area} sq ft`;

            figure.appendChild(img);
            figure.appendChild(figcaption);
            gallery.appendChild(figure);
        });
    }

    function filterTemples(criteria) {
        let filteredTemples = [];
        switch(criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date("2000-01-01"));
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated) >= new Date("2000-01-01"));
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 100000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area <= 10000);
                break;
            default:
                filteredTemples = temples;
        }
        displayTemples(filteredTemples);
    }

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const filterCriteria = this.getAttribute("data-filter");
            filterTemples(filterCriteria);
        });
    });

    // Initially display all temples
    filterTemples("all");
});
