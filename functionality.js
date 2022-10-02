function addition(num1, num2) {
  return Number(num1) + Number(num2);
}

function sub(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator == "+") {
    result = addition(num1, num2);
  } else if (operator == "-") {
    result = sub(num1, num2);
  } else if (operator == "*") {
    result = multiply(num1, num2);
  } else if (operator == "/") {
    result = divide(num1, num2);
  }
  output.textContent = result;
}

let result;
let operation;
let output = document.querySelector("#output");
const buttons = document.getElementById("button-container");
const equals = document.getElementById("equals");
const add = document.getElementById("add");
let input = document.querySelector("input");
let value = 0;
let value2 = 0;

input.focus();

add.addEventListener("mousedown", () => {
  operation = "+";
  value = input.value;
  input.blur();
  input.value = "";
  output.textContent = value + " " + operation;
});

equals.addEventListener("mousedown", () => {
  console.log(value);
  value2 = input.value;
  operate(operation, value, value2);
});
