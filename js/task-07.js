const inputEl = document.querySelector('input[type="range"]');
const spanEl = document.querySelector('span[id="text"]');

inputEl.addEventListener('input', changeSize);
spanEl.style.fontSize = `${inputEl.value}px`;
function changeSize () {
   spanEl.style.fontSize = `${inputEl.value}px`;
}