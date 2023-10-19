const input = document.querySelector("#validation-input");

const onInputBlur = (event) => {
  if (
    event.currentTarget.value.trim().length === Number(input.dataset.length)
  ) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", onInputBlur);
