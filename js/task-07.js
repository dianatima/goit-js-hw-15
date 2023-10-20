const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");

span.style.fontSize = input.value + "px";

const onInput = (event) =>
  (span.style.fontSize = event.currentTarget.value + "px");

input.addEventListener("input", onInput);
