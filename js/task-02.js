const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const newVeg = document.querySelector("#ingredients");
console.log(newVeg);
const newVegItem = ingredients.map((el) => {
  const vegsItem = document.createElement("li");
  vegsItem.textContent = el;
  vegsItem.classList.add("item");
  return vegsItem;
});
console.dir(newVegItem);
newVeg.append(...newVegItem);
console.log(newVeg);
