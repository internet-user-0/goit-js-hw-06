function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', colorGeneration)

function colorGeneration() {
  const color = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = `${color}`;
  document.querySelector('.color').textContent = color;
}