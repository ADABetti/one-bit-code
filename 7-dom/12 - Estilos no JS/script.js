function useLightTheme() {
  document.body.style.color = "#212529";
  document.body.style.backgroundColor = "#f1f5f9";
}

function useDarkTheme() {
  document.body.style.color = "#f1f5f9";
  document.body.style.background = "#212529";
}

function switchTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("light-btn").addEventListener("click", useLightTheme);
document.getElementById("dark-btn").addEventListener("click", useDarkTheme);
document
  .getElementById("switch-theme-btn")
  .addEventListener("click", switchTheme);
