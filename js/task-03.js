const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galListEl = document.querySelector(".gallery");

const galCard = ({ url, alt } = {}) => {
  return `
    <li class="gallery-item">
      <a href="#">
        <img src="${url}" alt="${alt}">
      </a>
    </li>
  `;
};

const galCardsArray = images.map((el) => {
  return galCard(el);
});

console.dir(galCardsArray);
galListEl.insertAdjacentHTML("beforeend", galCardsArray.join(""));
// galListEl.style.maxWidth = "860px";
// galListEl.style.padding = "16px";
// galListEl.style.outLine = "4px";
// galListEl.style.outLineColor = "green";
