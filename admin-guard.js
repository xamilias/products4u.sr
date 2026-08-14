const SESSION_KEY = "products4u-admin";

if (sessionStorage.getItem(SESSION_KEY) !== "true") {
  window.location.replace("index.html");
}

document.getElementById("logoutBtn").addEventListener("click", function () {
  sessionStorage.removeItem(SESSION_KEY);
  window.location.href = "index.html";
});
