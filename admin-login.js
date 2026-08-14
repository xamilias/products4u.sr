const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "products4u";
const SESSION_KEY = "products4u-admin";

const modal = document.getElementById("loginModal");
const form = document.getElementById("loginForm");
const error = document.getElementById("loginError");
const username = document.getElementById("username");
const password = document.getElementById("password");

function openModal() {
  modal.hidden = false;
  error.hidden = true;
  form.reset();
  username.focus();
}

function closeModal() {
  modal.hidden = true;
}

document.getElementById("adminLoginBtn").addEventListener("click", openModal);
document.getElementById("cancelLogin").addEventListener("click", closeModal);

modal.addEventListener("click", function (event) {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (username.value.trim() === ADMIN_USERNAME && password.value === ADMIN_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "true");
    window.location.href = "admin.html";
    return;
  }
  error.hidden = false;
  password.value = "";
  password.focus();
});
