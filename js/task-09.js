function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const textColor = document.querySelector(".color");
const chngClrBtn = document.querySelector(".change-color");
const body = document.body;

const changeColor = () => {
  textColor.textContent = getRandomHexColor();
  body.style.backgroundColor = textColor.textContent;
};

chngClrBtn.addEventListener("click", changeColor);
// ==========================================================================

// const palletEl = document.querySelector(".js-pallet");
// const palletItemEl = document.querySelectorAll(".js-pallet > li");

// const randomColor = () => {
//   return (
//     "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
//   );
// };

// const paintElements = () => {
//   palletItemEl.forEach((element) => {
//     const color = randomColor();

//     element.style.backgroundColor = color;
//     element.dataset.bgColor = color;
//   });
// };

// paintElements();

// const onPalletElClick = (event) => {
//   if (event.target.nodeName !== "LI") {
//     return;
//   }

//   const { target: liEl } = event;

//   const liBgColor = liEl.dataset.bgColor;
//   const spanEl = liEl.querySelector(".js-pallet__item-color");

//   spanEl.textContent = liBgColor;
// };

// palletEl.addEventListener("click", onPalletElClick);
