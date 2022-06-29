const inputEl =  document.getElementById('validation-input');


inputEl.addEventListener('input', stringValidation);


function stringValidation (event) {
   if (event.currentTarget.value.length == inputEl.getAttribute('data-length')) {
      return inputEl.style.borderColor = '#4caf50';
   }
   inputEl.style.borderColor = '#f44336';
};