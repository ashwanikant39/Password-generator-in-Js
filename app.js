let genBtn = document.querySelector("#btn");
let showPassText = document.querySelector("#showPassText");
let copyText = document.querySelector("#copyId");

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
  if (allChar.length < 1) {
    alert("Please select atleast 1 type");
  }
  for (let i = 0; i < range.value; i++) {
    finalPass += allChar.charAt(Math.floor(Math.random() * allChar.length));
  }

  return finalPass;
  // return 10;
}

copyText.addEventListener("click", () => {
  // console.log(showPassText.value);
  if (showPassText.value != "" || showPassText.value.length >= 1) {
    navigator.clipboard.writeText(showPassText.value);
    copyText.title = "Password Copied";
    copyText.innerHTML = "Copied";
    copyText.classList.add("copied");
    copyText.classList.remove("copy");

    setTimeout(() => {
      copyText.innerHTML = "Copy";
      copyText.classList.add("copy");
      copyText.classList.remove("copied");
    }, 2000);
  }
});
