let range = document.querySelector("#range");
let rangeValue = document.querySelector("#rangeValue");
range.addEventListener("input", () => {
  rangeValue.innerHTML = range.value;
});

// let btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {

// });
