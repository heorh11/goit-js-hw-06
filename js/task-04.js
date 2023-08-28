const counterValue = document.getElementById('value');
let currentValue = 0;

const decrementBtn = document.querySelector('[ data-action="decrement"]')
const incrementBtn = document.querySelector('[ data-action="increment"]')
decrementBtn.addEventListener('click', () => {
    currentValue -= 1;
    counterValue.textContent = currentValue
})
incrementBtn.addEventListener('click', () => {
    currentValue += 1;
    counterValue.textContent = currentValue
})
