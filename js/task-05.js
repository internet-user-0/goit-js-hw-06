const refs = {
   inputEl: document.querySelector('input[id="name-input"]'),
   spanEl: document.querySelector('span[id="name-output"]'),
 };
 
 refs.inputEl.addEventListener("input", onInputChange);
 
 function onInputChange(event) {
   if (event.currentTarget.value === "") {
     refs.spanEl.textContent = "Anonymous";
   } else {
     refs.spanEl.textContent = event.currentTarget.value;
   }
 }