let genBtn = document.querySelector("#btn");
let showPassText = document.querySelector("#showPassText");

let uCase = document.querySelector("#uCase");
let lcase = document.querySelector("#lcase");
let symbolCase = document.querySelector("#symbol");
let numberCase = document.querySelector("#number");

let range = document.querySelector("#range");
let rangeValue = document.querySelector("#rangeValue");

rangeValue.innerHTML = range.value;

range.addEventListener("input", () => {
  rangeValue.innerHTML = range.value;
});

let uppperChar = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let symChar = "~!@#$%^&*";
let numChar = "0123456789";

genBtn.addEventListener("click", () => {
  showPassText.value = GenPassword();
});

function GenPassword() {
  let allChar = "";
  let finalPass = "";

  allChar += uCase.checked ? uppperChar : "";
  allChar += lcase.checked ? lowerChar : "";
  allChar += symbolCase.checked ? symChar : "";
  allChar += numberCase.checked ? numChar : "";
  // console.log(allChar);
  for (let i = 0; i < range.value; i++) {
    finalPass += allChar.charAt(Math.floor(Math.random() * allChar.length));
  }

  return finalPass;
  // return 10;
}
