const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  console.log(inputEl.value.length);
  if (inputEl.getAttribute("data-length") == inputEl.value.length) {
    inputEl.classList.add("valid");
    console.log(inputEl.classList);
  } else {
    inputEl.classList.add("invalid");
  }
});
