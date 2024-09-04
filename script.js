const screen = document.querySelector(".result-screen");
screen.innerText = 0;

let buffer = "";
let operand1 = 0;
let operation = "";
let result = 0;

function buttonClick(value) {
  if (value === "÷" || value === "x" || value === "-" || value === "+") {
    if (operand1 === 0) operand1 = Number(buffer);
    buffer = "";
    operation = value;
    screen.innerText = 0;
  } else if (value === "C") {
    buffer = "";
    operand1 = 0;
    operation = "";
    result = 0;
    screen.innerText = 0;
  } else if (value === "←") {
    buffer = buffer.slice(0, -1);
    if (buffer === "") {
      screen.innerText = 0;
    } else screen.innerText = buffer;
  } else if (value === "=") {
    switch (operation) {
      case "+":
        result = operand1 + +buffer;
        break;
      case "-":
        result = operand1 - +buffer;
        break;
      case "x":
        result = operand1 * +buffer;
        break;
      case "÷":
        result = operand1 / +buffer;
        break;
      default:
        break;
    }
    screen.innerText = result;
    operand1 = result;
    buffer = 0;
  } else {
    buffer += value;
    screen.innerText = buffer;
  }
}
const button = document
  .querySelector(".calculator")
  .addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  });
