const modalNewsletter = document.querySelector(".modal-newsletter");
const modalCloseWindow = document.querySelector(".modal-close");
const modalSubmitBtn = document.querySelector(".modal-submit");
const main = document.querySelector(".main");
const emailInput = document.querySelector(".email");

const openModal = () => {
  modalNewsletter.classList.remove("hidden");
  main.classList.add("blur");
};

const closeModal = () => {
  modalNewsletter.classList.add("hidden");
  main.classList.remove("blur");
};

const validateEmail = () => {
  const email = emailInput.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

  if (regex.test(email)) {
    modalSubmitBtn.value = "Subscribed!";
    setTimeout(closeModal, 1000);
  } else {
    alert("Please enter a valid email address");
    emailInput.value = "";
  }
};

window.addEventListener("load", () => {
  setTimeout(openModal, 2000);
});

modalCloseWindow.addEventListener("click", closeModal);

modalSubmitBtn.addEventListener("click", validateEmail);
