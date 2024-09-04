const screen = document.querySelector(".result-screen");
screen.innerText = 0;

let buffer = "";
let operand1 = 0;
let operation = "";
let result = 0;

const button = document.querySelector(".calculator");
button.addEventListener("click", function (event) {
  if (
    event.target.innerText === "÷" ||
    event.target.innerText === "x" ||
    event.target.innerText === "-" ||
    event.target.innerText === "+"
  ) {
    if (operand1 === 0) {
      operand1 = Number(buffer);
    }
    buffer = "";
    operation = event.target.innerText;
    screen.innerText = 0;
  } else if (event.target.innerText === "C") {
    buffer = "";
    operand1 = 0;
    operation = "";
    result = 0;
    screen.innerText = 0;
  } else if (event.target.innerText === "←") {
    buffer = buffer.slice(0, -1);
    if (buffer === "") {
      screen.innerText = 0;
    } else screen.innerText = buffer;
  } else if (event.target.innerText === "=") {
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
    buffer += event.target.innerText;
    screen.innerText = buffer;
  }

  console.log(`operand1: ${operand1}`);
  console.log(`operation: ${operation}`);
  console.log(`buffer: ${buffer}`);
  console.log(`result: ${result}`);
});
