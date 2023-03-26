const inputCheck = document.querySelector("#name-input");
const outputCheck = document.querySelector("#name-output");

inputCheck.addEventListener("input", textInput);

function textInput() {
  if (!inputCheck.value) {
    changeInputCheck("Anonimous");
  } else {
    changeInputCheck(inputCheck.value);
  }
}
function changeInputCheck(name) {
  outputCheck.textContent = name;
}

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
