const inputEmailEl = document.querySelector('[type="email"]');
const inputPasswordEl = document.querySelector('[type="password"]');
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formSubmit);

function formSubmit(event) {
   event.preventDefault();

   const userData = {
      [inputEmailEl.getAttribute('type')]: formEl.elements.email.value,
      [inputPasswordEl.getAttribute('type')]: formEl.elements.password.value
   }

   formEl.reset();

   return console.log(userData);
};

