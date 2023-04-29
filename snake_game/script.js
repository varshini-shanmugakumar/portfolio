const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
// creating snake food
let foodX, foodY;
// creating snake head
let snakeX = 5,
  snakeY = 10;
// making the snake move for keyboard commands
let velocityX = 0,
  velocityY = 0;

let snakeBody = [];

let setIntervalId;

let score = 0;

// Getting high score fro local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

const changeFoodPosition = () => {
  // passing a random value between 1-30 as food position
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

const handleGameOver = () => {
  // Clearing the timer and reloading the page on game over
  clearInterval(setIntervalId);
  alert("Game over! Press any key to continue...");
  location.reload();
};

const changeDirection = (e) => {
  // changing velocity based on the key pressed
  if (e.key === "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key === "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.key === "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.key === "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
};

controls.forEach((key) => {
  // Calling changeDirection function on each click and passing key dataset value as an object
  key.addEventListener("click", () =>
    changeDirection({ key: key.dataset.key })
  );
});

const initGame = () => {
  if (gameOver) return handleGameOver();
  // creating snake food
  let htmlMarkup = `<div class="food" style="grid-area:${foodY}/${foodX}"></div>`;
  // creating snake head
  //htmlMarkup += `<div class="snake-head" style="grid-area:${snakeY}/${snakeX}"></div>`;

  // Checking if the snake hit the food
  if (snakeX == foodX && snakeY == foodY) {
    changeFoodPosition();
    snakeBody.push([foodX, foodY]); // Pushing food position to snake body array
    score++; // increase score by 1

    highScore = score >= highScore ? score : highScore;
    localStorage.setItem("high-score", highScore);

    scoreElement.innerText = `Score: ${score}`;
    highScoreElement.innerText = `High Score: ${highScore}`;
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    //Switching forward the values of the elements in the snake body by one
    snakeBody[i] = snakeBody[i - 1];
  }

  snakeBody[0] = [snakeX, snakeY]; // Setting first element of snake body to current snake position

  // updating snake's head position based on current velocity
  snakeX += velocityX;
  snakeY += velocityY;

  //Checking if the snake's head is out of wall, if so setting gameOver to true
  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    gameOver = true;
  }

  for (let i = 0; i < snakeBody.length; i++) {
    // adding a div to snake body after eating food
    htmlMarkup += `<div class="snake-head" style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`;
    if (
      i !== 0 &&
      snakeBody[0][1] === snakeBody[i][1] &&
      snakeBody[0][0] === snakeBody[i][0]
    ) {
      gameOver = true;
    }
  }
  playBoard.innerHTML = htmlMarkup;
};

changeFoodPosition();
setIntervalId = setInterval(initGame, 125);

document.addEventListener("keydown", changeDirection);
