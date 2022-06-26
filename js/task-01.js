const categoryAmountEl = document.querySelectorAll('#categories .item');


console.log('Number of categories:', categoryAmountEl.length);
categoryAmountEl.forEach((element) => {
   console.log('Category', element.querySelector("h2").textContent);
   return console.log('Elements', element.querySelectorAll("li").length);
});