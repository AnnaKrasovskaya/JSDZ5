// Задание 1
// const nav = window.navigator;
// console.log(nav);

// const loc = window.location;
// console.log(loc);

// console.log("На компьютере с ОС ... с помощью браузера ... я открыл страничку ... ");

// Задание 2
// const names = document.querySelectorAll("ul li");
// names.forEach((el) => {
//   console.log(el.innerText);
// });
// names.forEach((el, index) => {
//   el.innerText = index;
// });

// Задание 3
// const newNames = document.querySelectorAll(".forRemove");
// newNames.forEach((el) => {
//   el.remove();
// });

// Задание 4

// const text = document.createElement("p");
// text.innerText = "Lorem ipsum dolor sit amet";
// document.body.append(text);

// Задание 5

// const func = (tagName, color, text) => {
//   const tag = document.createElement(tagName);
//   tag.style.color = color;
//   tag.innerText = text;
//   document.body.append(tag);
// };
// console.log(func("h1", "green", "Заголовок"));
// document.body.append(func("h1", "green", "Заголовок"));

// Задание 6

// const years = document.querySelector("select");
// const yearsArray = [];
// for (i = 1960; i <= 2020; i++) {
//   yearsArray.push(i);
// }
// yearsArray.forEach((element) => {
//   const atribute = document.createElement("option");
//   atribute.innerText = element;
//   years.append(atribute);
// });

// Задание 7
// const clientsDiv = document.querySelector(".clients");
// const ul = clientsDiv.querySelector("ul");
// const clients = [
//   { name: "Женя", order: true },
//   { name: "Кристина", order: true },
//   { name: "Павел", order: false },
//   { name: "Виолетта", order: false },
//   { name: "Костя", order: true },
// ];
// clients.forEach((element) => {
//   const list = document.createElement("li");
//   list.innerText = `Клиент ${element.name}  ${
//     element.order === true ? "оплатил заказ" : "отменил заказ"
//   }`;
//   ul.append(list);
// });

// Задание 8

let linksArr = [
  "https://www.amazon.com/",
  "https://www.youtube.com/",
  "https://devby.io/",
  "https://www.google.com/",
  "https://apple.com/",
];

const section = document.createElement("div");
section.style.background = "grey";
section.style.padding = "20px";

linksArr.forEach((element) => {
  const link = document.createElement("a");
  link.href = element;
  section.append(link);
  link.style.display = "block";
  link.innerText = element;
});
document.body.append(section);
