const regLink = document.querySelector(".reg");
const regForm = document.querySelector(".register-form");
const logLink = document.querySelector(".log");
const logForm = document.querySelector(".login-form");

regLink.addEventListener("click", () => {
  logForm.classList.add("hide");
  regForm.classList.remove("hide");
});

logLink.addEventListener("click", () => {
  regForm.classList.add("hide");
  logForm.classList.remove("hide");
});