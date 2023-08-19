const nameInput = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
nameInput.addEventListener('input', () => {
    userName.textContent = nameInput.value;
})