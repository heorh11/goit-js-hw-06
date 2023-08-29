const nameInput = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
        userName.textContent = 'Anonymous';
    } else {
        userName.textContent = nameInput.value;
    }
})