const message = document.querySelector(".message");
const scoreElem = document.querySelector(".score");
const highScoreElem = document.querySelector(".high-score");
const spaceKey = document.querySelector(".space-key");

let currentScore = 0;
let currentHighScore = 0;
let isPlaying = false;
let timer = 5;

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !isPlaying) {
    isPlaying = true;
    let gameTimer = setInterval(function () {
      message.textContent = "Time left : " + timer;
      if (timer <= 0) {
        isPlaying = false;
        message.textContent = "Game Over! Press Enter to play again!";
        clearInterval(gameTimer);
        if (currentScore > currentHighScore) {
          currentHighScore = currentScore;
          highScoreElem.textContent = currentHighScore;
        }
        currentScore = 0;
        scoreElem.textContent = currentScore;
        //Challenge Solution - These 2 lines of code makes the game run again
        timer = 5; //reset the timer
        return;
      }
      timer--;
    }, 1000);
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key === " " && isPlaying === true) {
    currentScore++;
    console.log(currentScore);
    scoreElem.innerHTML = currentScore;
    spaceKey.style.backgroundImage = 'url("./assets/spaceKey.png")';
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === " " && isPlaying === true) {
    spaceKey.style.backgroundImage = 'url("./assets/spaceKeyPressed.png")';
  }
});
