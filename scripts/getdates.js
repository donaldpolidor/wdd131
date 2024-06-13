// JavaScript pour mettre à jour dynamiquement l'année et la date de dernière modification
document.getElementById("currentyear").textContent = new Date().getFullYear(); // Mettre à jour l'année du droit d'auteur
document.querySelector("#lastModified .highlight").textContent = new Date(document.lastModified).toLocaleString(); // Mettre à jour la date de dernière modification
