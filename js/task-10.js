function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


const inputEL = document.querySelector('[type="number"]');
const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-Destroy]');
const boxesEl = document.querySelector('[id="boxes"]')



buttonCreateEl.addEventListener('click', createBoxes);
// buttonDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes() {
for (let i = 1; i <= inputEL.value; i += 1){
  console.log(inputEL.value);
  const addLiEl = document.createElement('div');
  
  addLiEl.style.height = '30px';
  addLiEl.style.backgroundColor = `${getRandomHexColor()}`;
  boxesEl.append(addLiEl);
}};




// function destroyBoxes() {
//   boxesEl.reset('');
// }
