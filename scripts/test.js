// Récupération des éléments nécessaires
const likeBtns = document.querySelectorAll('.like-btn');
const photos = document.querySelectorAll('.photo-img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModalBtn = document.getElementById('close-btn');

// Fonction pour gérer les likes/dislikes avec localStorage
function handleLike(photoIndex) {
    let likes = localStorage.getItem(`photo${photoIndex}_likes`);
    if (!likes) likes = 0;
    likes = parseInt(likes);

    const likeCountElement = document.querySelector(`#like-btn-${photoIndex} .like-count`);
    likeCountElement.textContent = likes;

    likeBtns[photoIndex - 1].addEventListener('click', () => {
        if (likeBtns[photoIndex - 1].classList.contains('liked')) {
            likes--;
            likeBtns[photoIndex - 1].classList.remove('liked');
        } else {
            likes++;
            likeBtns[photoIndex - 1].classList.add('liked');
        }
        likeCountElement.textContent = likes;
        localStorage.setItem(`photo${photoIndex}_likes`, likes);
    });

    // Vérifier s'il y a déjà un like enregistré
    if (localStorage.getItem(`photo${photoIndex}_likes`)) {
        likes = parseInt(localStorage.getItem(`photo${photoIndex}_likes`));
        likeCountElement.textContent = likes;
    }
}

// Initialisation des likes pour chaque photo
likeBtns.forEach((btn, index) => {
    handleLike(index + 1);
});

// Fonction pour afficher une image en grand plan au double-clic
photos.forEach(photo => {
    photo.addEventListener('dblclick', () => {
        modal.style.display = 'flex';
        modalImg.src = photo.src;
    });
});

// Fonction pour fermer l'image en grand plan
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fermer l'image en grand plan en cliquant en dehors de l'image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
