const inputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

const permanentChange = () => {
  spanTextEl.style.fontSize = `${inputEl.value}px`;
};
inputEl.addEventListener("input", permanentChange);
