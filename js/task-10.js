function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxBtn = document.querySelector('[data-create]');
const destroyBoxBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBoxBtn.addEventListener('click', () => {
  const amount = +document.querySelector('input').value;
  const boxesArray = [];
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box);
  }

  boxesContainer.append(...boxesArray);
});

destroyBoxBtn.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});