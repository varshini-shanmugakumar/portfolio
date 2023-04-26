var display = document.getElementById("display"),
  inputs = document.getElementsByClassName("inputs"),
  operators = document.getElementsByClassName("operators"),
  equal = document.getElementById("equal"),
  clear = document.getElementById("clear"),
  backspace = document.getElementById("backspace"),
  currentInput,
  currentOperator,
  displayValue,
  result,
  backspaceValue,
  i,
  io,
  position;

function dataInput(val) {
  currentInput = val;
  // display.focus();
  displayValue = display.value;
  console.log(display.selectionStart);
  position = display.selectionStart;
  display.value =
    displayValue.slice(0, display.selectionStart) +
    currentInput +
    displayValue.slice(display.selectionStart);

  display.selectionEnd = position + 1;

  display.focus();

  // display.value += currentInput;

  // console.log(
  //   "displayValue.slice(0, display.selectionStart):" +
  //     displayValue.slice(0, display.selectionStart)
  // );
  // console.log("currentInput" + currentInput);
  // console.log(
  //   " displayValue.slice(display.selectionStart):" +
  //     displayValue.slice(display.selectionStart)
  // );

  // var insertTokenAt = display.selectionEnd;
  // console.log(insertTokenAt);
  // displayValue = display.value;
  // display.value =
  //   displayValue.slice(0, insertTokenAt) +
  //   val +
  //   displayValue.slice(insertTokenAt);
}

// function operatorInput(val1) {
//   currentOperator = val1;
//   display.focus();
//   displayValue = display.value;
//   console.log(display.selectionStart);
//   // display.value =
//   //   displayValue.slice(0, display.selectionStart) +
//   //   currentOperator +
//   //   displayValue.slice(display.selectionStart);

//   display.value += currentOperator;

//   display.value =
//     displayValue.slice(0, display.selectionStart) +
//     currentOperator +
//     displayValue.slice(display.selectionStart);
//   // var insertTokenAt = display.selectionEnd;
//   // console.log(insertTokenAt);
//   // displayValue = display.value;
//   // display.value =
//   //   displayValue.slice(0, insertTokenAt) +
//   //   val1 +
//   //   displayValue.slice(insertTokenAt);
// }

function displayResult() {
  if (display.value === "") {
    display.value = "";
  } else {
    displayValue = display.value;
    result = eval(displayValue);
    display.value = result;
  }
}

function deleteSingle() {
  backspaceValue = display.value;
  display.value = backspaceValue.substr(0, backspaceValue.length - 1);
}

function clearAll() {
  display.value = "";
}

function keyboardInput(key) {
  if (
    (key.which < 0 || key.which > 57) &&
    key.which !== 13 &&
    key.which !== 8
  ) {
    return false;
  } else {
    key.preventDefault();
    if (key.which === 13) {
      displayResult();
    } else if (key.which === 8) {
      deleteSingle();
    } else if (key.which > 39 && key.which < 58) {
      dataInput(key.key);
    } else {
      display.value = display.value;
    }
    return true;
  }
}

function currentTime() {
  let date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let session = "AM";

  if (hrs >= 12) {
    session = "PM";
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let time = hrs + ":" + min + ":" + sec + " " + session;
  document.getElementById("clock").innerText = time;
}

// function myFunction() {
//   let x = document.getElementById("clock");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
var intervalID;
var oldElements = [];

let x = document.getElementById("clock");

function myFunction() {
  if (document.getElementById("switch").checked) {
    console.log(document.getElementById("switch").checked);
    currentTime();
    intervalID = setInterval(function () {
      currentTime();
    }, 1000);
  } else {
    console.log(document.getElementById("switch").checked);
    stopMyFunction();
    oldElements.push(x);
    x.remove();
    window.location.reload();
  }
}

function stopMyFunction() {
  clearInterval(intervalID);
}

var tab = document.getElementById("cal-id");

window.onload = function () {
  display.onkeypress = keyboardInput;

  tab.addEventListener("click", function (e) {
    if (e.target.matches(".inputs")) {
      dataInput(e.target.value);
    } else if (e.target.matches(".operators")) {
      dataInput(e.target.value);
    }
  });

  equal.onclick = displayResult;

  backspace.onclick = deleteSingle;

  clear.onclick = clearAll;
};
