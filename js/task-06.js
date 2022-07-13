const inputEl =  document.querySelector('input[id="validation-input"]');


inputEl.addEventListener('input', stringValidation);


function stringValidation (event) {
   if (event.currentTarget.value.length == inputEl.getAttribute('data-length')) {
      inputEl.classList.remove("invalid");
      return inputEl.classList.add("valid");
   }
   inputEl.classList.remove("valid");
   inputEl.classList.add("invalid");
};