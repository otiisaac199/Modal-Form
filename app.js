const loginBtn = document.querySelector(".login-button");
const modalCont = document.querySelector("#modal");
const closeBtn = document.querySelector(".close");
const cancelBtn = document.querySelector(".cancelbtn");
const mode = document.querySelector(".light-mode");
let body = document.body;

addEventListener("click", (e) => {
  e = e.target == modalCont ? (modalCont.style.display = "none") : modalCont;
});

loginBtn.addEventListener("click", () => {
  modalCont.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modalCont.style.display = "none";
});
cancelBtn.addEventListener("click", () => {
  modalCont.style.display = "none";
});

mode.addEventListener("click", (m) => {
  body.classList.toggle("-mode");
  mode.classList.toggle("light-mode");
});
