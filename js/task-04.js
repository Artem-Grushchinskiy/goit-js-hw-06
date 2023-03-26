const btnDecrement = document.querySelector("[data-action=decrement]");
const btnIncrement = document.querySelector("[data-action=increment]");
const spanValue = document.querySelector("#value");

btnDecrement.addEventListener("click", btnDecrementClicked);
btnIncrement.addEventListener("click", btnIncrementClicked);

let counterValue = 0;

function btnDecrementClicked() {
  counterValue -= 1;
  spanValue.textContent = counterValue;
}
function btnIncrementClicked() {
  counterValue += 1;
  spanValue.textContent = counterValue;
}
