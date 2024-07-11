// Table of product
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

function populateProducts() {
    const productNameSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.textContent = product.name;
        option.value = product.name;
        productNameSelect.appendChild(option);
    });
}

function createRatingOptions() {
    const productRatingDiv = document.getElementById('productRating');
    
    const firstLabel = document.createElement('label');
    firstLabel.setAttribute('for', 'star1');
    firstLabel.innerHTML = '☆'; 

    const firstInput = document.createElement('input');
    firstInput.type = 'radio';
    firstInput.id = 'star1';
    firstInput.name = 'productRating';
    firstInput.value = 1;
    firstInput.required = true;

    const firstSpan = document.createElement('span');
    firstSpan.appendChild(firstLabel);
    firstSpan.appendChild(firstInput);

    productRatingDiv.appendChild(firstSpan);

    for (let i = 2; i <= 5; i++) {
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

function handleSubmit(event) {
    event.preventDefault();

    let reviewsCount = localStorage.getItem('reviewsCount') || 0;
    reviewsCount++;
    localStorage.setItem('reviewsCount', reviewsCount);

    // Soumission du formulaire
    const form = event.target;
    form.submit();
}

function displayLastModified() {
    const lastModifiedSpan = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    lastModifiedSpan.textContent = lastModifiedDate.toLocaleDateString('en-US', options);
}


document.addEventListener('DOMContentLoaded', function() {
    populateProducts();
    createRatingOptions();
    displayLastModified();

    const form = document.getElementById('productReviewForm');
    form.addEventListener('submit', handleSubmit);
});
