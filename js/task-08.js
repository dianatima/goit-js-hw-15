const form = document.querySelector("form.login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  mail && password
    ? console.log({ mail, password })
    : alert("All fields must be filled");

  event.currentTarget.reset();
}
