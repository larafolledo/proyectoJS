let numberToGuess = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let guessLimit = 10;

function playRound() {
  guessCount++;
  let userGuess = document.getElementById("guess").value;
  if (guessCount <= guessLimit) {
    if (userGuess == numberToGuess) {
      document.getElementById("result").textContent = "Congratulations! You guessed the number.";
    } else if (userGuess < numberToGuess) {
      document.getElementById("result").textContent = "Try again. Your guess is too low.";
    } else if (userGuess > numberToGuess) {
      document.getElementById("result").textContent = "Try again. Your guess is too high.";
    }
  } else {
    document.getElementById("result").textContent = "Game over. The number was " + numberToGuess;
  }
}