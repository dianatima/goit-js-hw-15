const form = document.querySelector("form.login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail && password) {
    console.log({ mail, password });
  } else {
    alert("All fields must be filled");
    return;
  }

  event.currentTarget.reset();
}
