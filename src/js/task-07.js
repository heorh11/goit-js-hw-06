const fontSizeControler = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeControler.addEventListener('input', () => {
    const fontSize = fontSizeControler.value + 'px';
    textEl.style.fontSize = fontSize;
});
