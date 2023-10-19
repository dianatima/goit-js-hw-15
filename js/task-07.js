const input = document.querySelector("input#font-size-control");

const onInput = (event) =>
  (document.querySelector("span#text").style.fontSize =
    event.currentTarget.value + "px");

input.addEventListener("input", onInput);
