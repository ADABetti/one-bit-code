import calculate from "./calculate.js";

const input = document.querySelector("#input");
const allowedKeys = ["(", ")", "/", "1", "2", "3", "4", "5", "6", "7", "9", "0", "+", "-", "*", "."];

export function handleButtonPress(ev) {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
}

export function clearButton() {
  input.value = "";
  input.focus();
}

export function handleTyping(ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
}
