function addition(num1, num2) {
  return Number(num1) + Number(num2);
}

function sub(num1, num2) {
  return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}

function divide(num1, num2) {
  return Number(num1) / Number(num2);
}

function operate(operator, num1, num2) {
  if (operator == "+") {
    result = addition(num1, num2);
  } else if (operator == "-") {
    result = sub(num1, num2);
  } else if (operator == "*") {
    result = multiply(num1, num2);
  } else if (operator == "/") {
    if (num2 == 0) {
      output.textContent = "Impossible";
    } else {
      result = divide(num1, num2);
    }
  }
  output.textContent = result;
  value = result;
  input.blur();
  input.value = "";
  console.log(value);
}

let result = null;
let operation;
let output = document.querySelector("#output");

const equals = document.getElementById("equals");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multi = document.getElementById("multiply");
const divi = document.getElementById("divide");
const clear = document.getElementById("clear");

let input = document.querySelector("input");

let value = 0;
let value2 = 0;
let which;

input.focus();

add.addEventListener("mousedown", () => {
  if (result == null) {
    operation = "+";
    if (value == 0) {
      value = input.value;
    }
    input.blur();
    input.value = "";
    output.textContent = value + " " + operation;
    which = 1;
  } else {
    operation = "+";
    if (value == 0) {
      value = input.value;
    }
    input.blur();
    input.value = "";
    output.textContent = value + " " + operation;
  }
});

subtract.addEventListener("mousedown", () => {
  if (result == null) {
    operation = "-";
    if (value == 0) {
      value = input.value;
    }
    input.blur();
    input.value = "";
    output.textContent = value + " " + operation;
  } else {
    operation = "-";
    if (value == 0) {
      value = input.value;
    }
    input.blur();
    input.value = "";
    output.textContent = value + " " + operation;
  }
});

multi.addEventListener("mousedown", () => {
  if (result == null) {
    operation = "*";
    if (value == 0) {
      value = input.value;
    }
    input.blur();
    input.value = "";
    output.textContent = value + " " + operation;
  } else {
    operation = "*";
    if (value == 0) {
      value = input.value;
    }
    input.blur();
    input.value = "";
    output.textContent = value + " " + operation;
  }
});

divi.addEventListener("mousedown", () => {
  if (result == null) {
    operation = "/";
    if (value == 0) {
      value = input.value;
    }
    input.blur();
    input.value = "";
    output.textContent = value + " " + operation;
  } else {
    operation = "/";
    if (value == 0) {
      value = input.value;
    }
    input.blur();
    input.value = "";
    output.textContent = value + " " + operation;
  }
});

equals.addEventListener("mousedown", () => {
  console.log(value);
  value2 = input.value;
  console.log(input.value);
  if (value2 == undefined) {
    value2 == 0;
  }
  if (operation == null || operation == undefined) {
    output.textContent = "Pick an operation!";
  } else {
    operate(operation, value, value2);
  }
});

const container = document.querySelector("#button-container");

clear.addEventListener("mousedown", () => {
  value = 0;
  value2 = 0;
  result = 0;
  output.textContent = "output";
  input.blur;
  input.value = 0;
});

for (i = 0; i <= 9; i++) {
  let padNum = document.createElement("button");
  padNum.setAttribute("id", i);
  container.appendChild(padNum);
  padNum.textContent = padNum.id;

  padNum.addEventListener("mousedown", (num) => {
    num = padNum.id;
    input.value += num;
    output.textContent = input.value;
  });
}
