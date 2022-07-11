const takeawayButtonEl = document.querySelector('button[data-action="decrement"]');
const addButtonEl = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector('span[id="value"]');
const action = {
   value: 0,
   decrement() {
      this.value -= 1;
   },
   increment() {
      this.value += 1;
   },
};

takeawayButtonEl.addEventListener('click', function() {
   action.decrement();
   spanEl.textContent = action.value;
})
addButtonEl.addEventListener('click', function() {
   action.increment();
   spanEl.textContent = action.value;
})