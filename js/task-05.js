const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

inputEl.addEventListener('input', spanTextChange);

function spanTextChange(event){
   spanEl.textContent = event.currentTarget.value;
}


console.log(inputEl);
console.log(spanEl);