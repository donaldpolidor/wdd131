const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    const chapter = input.value.trim(); // Trim leading/trailing whitespace
    if (chapter !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = chapter;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus(); // Focus the input field after deletion
        });

        li.append(deleteButton);
        list.append(li);

        input.value = ''; // Clear the input field
        input.focus(); // Focus the input field for convenience
    } else {
        alert("Please enter a book and chapter.");
        input.focus();
    }
});
