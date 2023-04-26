let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

// var display = document.getElementsByClassName("input"),
//   inputs = document.getElementsByClassName("btn"),
//   operators = document.getElementById("operator"),
//   equal = document.getElementById("equal"),
//   clear = document.getElementById("clear"),
//   backspace = document.getElementById("backspace"),
//   currentInput,
//   currentOperator,
//   displayValue,
//   result,
//   backspaceValue,
//   i,
//   io;

// function dataInput() {
//   currentInput = this.value;
//   display.value += currentInput;
// }

// function operatorInput() {
//   currentOperator = this.value;
//   display.value += currentOperator;
// }

// function displayResult() {
//   if (displayValue == "") {
//     display.value = "";
//   } else {
//     displayValue = display.value;
//     displayValue = displayValue.replace(/[\d.]+/g, function (n) {
//       return parseFloat(n);
//     });
//     result = eval(displayValue);
//     display.value = result;
//   }
// }

// function deleteSingle() {
//   backspaceValue = display.value;
//   display.value = backspaceValue.substr(0, backspaceValue.length - 1);
// }

// function clearAll() {
//   display.value = "";
// }

// function keyBoardInput(key) {
//   if ((key.key < 0 || key.key > 57) && key.key != 13 && key.key != 99) {
//     return false;
//   } else {
//     key.preventDefault();
//     if (key.key == 48) {
//       display.value += "0";
//     } else if (key.key == 49) {
//       display.value += "1";
//     } else if (key.key == 50) {
//       display.value += "2";
//     } else if (key.key == 51) {
//       display.value += "3";
//     } else if (key.key == 52) {
//       display.value += "4";
//     } else if (key.key == 53) {
//       display.value += "5";
//     } else if (key.key == 54) {
//       display.value += "6";
//     } else if (key.key == 55) {
//       display.value += "7";
//     } else if (key.key == 56) {
//       display.value += "8";
//     } else if (key.key == 57) {
//       display.value += "9";
//     } else if (key.key == 46) {
//       display.value += ".";
//     } else if (key.key == 40) {
//       display.value += "(";
//     } else if (key.key == 41) {
//       display.value += ")";
//     } else if (key.key == 42) {
//       display.value += "*";
//     } else if (key.key == 47) {
//       display.value += "/";
//     } else if (key.key == 43) {
//       display.value += "+";
//     } else if (key.key == 45) {
//       display.value += "-";
//     } else if (key.key == 13) {
//       displayResult();
//     } else if (key.key == 99) {
//       clearAll();
//     } else {
//       display.value = display.value;
//     }
//     return true;
//   }
// }

// function backspaceKeyEvent(event) {
//   if (event.key == 8) {
//     deleteSingle();
//   }
// }

// window.onload = function () {
//   document.onkeydown = keyBoardInput;

//   // document.onkeydown = backspaceKeyEvent;

//   for (i = 0; i < inputs.length; i++) {
//     inputs[i].onclick = dataInput;
//   }

//   for (io = 0; io < operators.length; io++) {
//     operators[io].onclick = operatorInput;
//   }

//   equal.onclick = displayResult;

//   backspace.onclick = deleteSingle;

//   clear.onclick = clearAll;
// };
