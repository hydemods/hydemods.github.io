const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");
const submitBtn = document.querySelector("#submitBtn");
const userData = [];

form.addEventListener("submit", e => {
  e.preventDefault();
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    email.value === "" ||
    password.value === "" ||
    passwordConfirm.value === ""
  ) {
    alert("All fields are required");
    return;
  }
  if (password.value !== passwordConfirm.value) {
    alert("Passwords do not match");
    return;
  }
  if (password.value.length < 12) {
    alert("Password must be at least 12 characters");
    return;
  }
  if (!/[A-Z]/.test(password.value)) {
    alert("Password must contain at least one uppercase letter");
    return;
  }
  if (!/[!@#$%^&*]/.test(password.value)) {
    alert("Password must contain at least one special character");
    return;
  }
  const newUser = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
  };
  userData.push(newUser);
  localStorage.setItem("userData", JSON.stringify(userData));
  alert("Registration Successful");
  form.reset();
});
