document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: "laptop-001", name: "Laptop X1" },
        { id: "smartphone-002", name: "Smartphone Pro" },
        { id: "tablet-003", name: "Tablet A10" },
        { id: "headphones-004", name: "Headphones Z" },
        { id: "smartwatch-005", name: "Smartwatch Q" }
    ];

    const productSelect = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const reviewForm = document.querySelector("form");

    reviewForm.addEventListener("submit", () => {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        localStorage.setItem("reviewCount", ++reviewCount);
    });
});
