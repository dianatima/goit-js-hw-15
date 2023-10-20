function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("div#boxes");
const body = document.querySelector("body");

createBtn.addEventListener("click", onCreateBtn);
destroyBtn.addEventListener("click", onDestroyBtn);

function createBoxes(amount) {
  let size = 20;
  let boxesElement = [];

  for (let i = 0; i < amount; i += 1) {
    size += 10;

    const divElement = document.createElement("div");
    divElement.style.width = size + "px";
    divElement.style.height = size + "px";
    divElement.style.backgroundColor = getRandomHexColor();

    boxesElement.push(divElement);
  }

  boxes.append(...boxesElement);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}

function onCreateBtn() {
  createBoxes(input.value);
}

function onDestroyBtn() {
  destroyBoxes();
}
