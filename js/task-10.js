function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



const input = document.querySelector('[type="number"]');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const div = document.querySelector('div[id="boxes"]')



create.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);


function createBoxes(amount){
  amount = Number(input.value) * 10;

  const array = [];
  for (let i = 20; i <= amount + 10; i += 10) {
    array.push({
    number: i,
    color: getRandomHexColor(),})
  }


  return div.insertAdjacentHTML("beforeend", `${array
    .map(({ number, color}) => {
        return `<div
        style="padding: ${number}px;
        margin-right: auto;
        align-items: left;
        background-color: ${color};"
        data-item>
        </div>`;
    })
    .join("")}`);
}


function destroyBoxes() {
  document.getElementById("boxes").innerHTML = "";
}
