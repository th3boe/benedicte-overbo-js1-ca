const form = document.querySelector("#contact");
const yourName = document.querySelector("#yourName");
const yourNameError = document.querySelector("#yourNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const email = document.querySelector("#email");

const message = document.querySelector("#successMessage");

function verifyForm(event) {
  event.preventDefault();

  if (valueLength(yourName.value, 0) === true) {
    yourNameError.style.display = "none";
  } else {
    yourNameError.style.display = "block";
  }

  if (valueLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (valueLength(address.value, 24) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (verifyEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (
    valueLength(yourName.value, 0) &&
    valueLength(subject.value, 9) &&
    valueLength(address.value, 24) &&
    verifyEmail(email.value)
  ) {
    message.style.display = "block";

    form.reset();
  } else {
    message.style.display = "none";
  }
}

form.addEventListener("submit", verifyForm);

function valueLength(value, span) {
  if (value.trim().length > span) {
    return true;
  } else {
    return false;
  }
}

function verifyEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const emailMatch = regEx.test(email);
  return emailMatch;
}
