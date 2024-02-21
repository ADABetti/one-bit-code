function useLightTheme() {
  document.body.style.color = "#232529";
  document.body.style.backgroundColor = "#7fffd4";
}

function useDarkTheme() {
  document.body.style.color = "#7fffd4";
  document.body.style.backgroundColor = "#232529";
}

function switchTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("light-btn").addEventListener("click", useLightTheme);
document.getElementById("dark-btn").addEventListener("click", useDarkTheme);
document.getElementById("switch-btn").addEventListener("click", switchTheme);
