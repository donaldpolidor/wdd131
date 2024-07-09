document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    // Initialize chaptersArray with data from localStorage or an empty array
    let chaptersArray = getChapterList() || [];

    // Display existing chapters from chaptersArray
    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });

    // Event listener for the button click
    button.addEventListener('click', () => {
        if (input.value !== '') {
            displayList(input.value); // Display the new chapter
            chaptersArray.push(input.value); // Add to chaptersArray
            setChapterList(); // Update localStorage
            input.value = ''; // Clear the input
            input.focus(); // Focus the input
        }
    });

    // Function to display a chapter in the list
    function displayList(item) {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        li.textContent = item;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            deleteChapter(li.textContent); // Remove from chaptersArray and localStorage
            input.focus(); // Focus the input
        });

        li.append(deleteButton);
        list.append(li);
    }

    // Function to set the chapters list in localStorage
    function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }

    // Function to get the chapters list from localStorage
    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }

    // Function to delete a chapter from chaptersArray and update localStorage
    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1); // Remove the last character (❌)
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
    }
});
