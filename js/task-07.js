const inputEl = document.querySelector("input#font-size-control");
const spanTextEl = document.querySelector("span#text");

inputEl.addEventListener("input", (permanentChange) => {
  spanTextEl.style.fontSize = `${permanentChange.target.value}px`;
});
