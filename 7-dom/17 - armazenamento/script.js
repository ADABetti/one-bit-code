// SESSION: A informação é mantida no navegador, mesmo quando a janela sendo fechada

document.getElementById("session-storage-btn").addEventListener("click", function () {
  const input = document.getElementById("session-storage");
  window.sessionStorage.setItem("info", input.value);
  input.value = "";
});

document.getElementById("read-session").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert("A informação salva é: " + info);
});

// LOCAL: A informação é mantida no navegador, mesmo quando a janela é fechada

document.getElementById("local-storage-btn").addEventListener("click", function () {
  const input = document.getElementById("local-storage");
  window.localStorage.setItem("info", input.value);
  input.value = "";
});

document.getElementById("read-local").addEventListener("click", function () {
  const info = localStorage.getItem("info");
  alert("A informação salva no local storage é: " + info);
});

// COOKIE

document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  //cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 6, 17) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  const cookie = "text=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 7, 16) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});
