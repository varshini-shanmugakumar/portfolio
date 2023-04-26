console.log("Script running...");
document.querySelector(".cross").style.display = "none";
document.querySelector(".ham").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
  } else {
    setTimeout(() => {
      document.querySelector(".cross").style.display = "inline";
    }, 200);

    document.querySelector(".ham").style.display = "none";
  }
});
document.querySelector(".cross").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
  } else {
    setTimeout(() => {
      document.querySelector(".cross").style.display = "inline";
    }, 200);

    document.querySelector(".ham").style.display = "none";
  }
});

// Typed animation

const typedText = document.querySelector(".typing-text");
const cursor = document.querySelector(".input-cursor");

const textArray = ["CSE undergrad", "software developer", "philomath"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay);
  }
}

if (!document.hidden) {
  document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay);
  });
}

// using typed.js
// var typed = new Typed(".typing-text", {
//   strings: ["CSE undergrad", "aspiring developer", "passionate learner"],
//   typeSpeed: 150,
//   backSpeed: 150,
//   loop: true,
// });
