// Tableau des produits
const products = [
    {
        id: 'fc-1888',
        name: 'Flux Capacitor',
        avgRating: 4.5
    },
    {
        id: 'fc-2050',
        name: 'Power Laces',
        avgRating: 4.7
    },
    {
        id: 'fs-1987',
        name: 'Time Circuits',
        avgRating: 3.5
    },
    {
        id: 'ac-2000',
        name: 'Low Voltage Reactor',
        avgRating: 3.9
    },
    {
        id: 'jj-1969',
        name: 'Warp Equalizer',
        avgRating: 5.0
    }
];

// Fonction pour peupler la liste déroulante des produits
function populateProducts() {
    const productNameSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.textContent = product.name;
        option.value = product.name;
        productNameSelect.appendChild(option);
    });
}

// Fonction pour créer les options de notation dynamiquement
function createRatingOptions() {
    const productRatingDiv = document.getElementById('productRating');

    for (let i = 1; i <= 5; i++) {
        const label = document.createElement('label');
        label.setAttribute('for', `star${i}`);
        label.innerHTML = '☆'.repeat(i); 

        const input = document.createElement('input');
        input.type = 'radio';
        input.id = `star${i}`;
        input.name = 'productRating';
        input.value = i;
        input.required = true;

        const span = document.createElement('span');
        span.appendChild(label);
        span.appendChild(input);

        productRatingDiv.appendChild(span); 
    }
}

// Fonction pour gérer la soumission du formulaire
function handleSubmit(event) {
    event.preventDefault();

    let reviewsCount = localStorage.getItem('reviewsCount') || 0;
    reviewsCount++;
    localStorage.setItem('reviewsCount', reviewsCount);

    const form = event.target;
    form.submit();
}

// Fonction pour afficher la date de dernière modification
function displayLastModified() {
    const lastModifiedSpan = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    lastModifiedSpan.textContent = lastModifiedDate.toLocaleDateString('en-US', options);
}

// Événement chargement du document
document.addEventListener('DOMContentLoaded', function() {
    populateProducts(); // Appeler la fonction pour peupler la liste déroulante des produits
    createRatingOptions(); // Appeler la fonction pour créer les options de notation
    displayLastModified(); // Appeler la fonction pour afficher la date de dernière modification

    const form = document.getElementById('productReviewForm');
    form.addEventListener('submit', handleSubmit); // Écouter l'événement de soumission du formulaire
});
