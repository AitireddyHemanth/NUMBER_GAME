let number;
let attempts;
let maxAttempts;
function setDifficulty() {
    let level = document.getElementById("difficulty").value;

    if (level === "easy") {
        maxAttempts = 10;
    } else if (level === "medium") {
        maxAttempts = 5;
    } else {
        maxAttempts = 3;
    }

    restartGame();
}
function restartGame() {
    number = Math.floor(Math.random() * 100) + 1;
    attempts = maxAttempts;
    document.getElementById("attempts").innerText = attempts;
    document.getElementById("message").innerText = "";
    document.getElementById("guessInput").value = "";
}
function checkGuess() {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (attempts <= 0) {
        message.innerText = "❌ Game Over! Number was " + number;
        message.className = "lose";
        return;
    }

    if (guess === number) {
        message.innerText = "🎉 YOU WIN! Correct Number 🎉";
        message.className = "win";
        attempts = 0;
    } 
    else if (guess < number) {
        attempts--;
        message.innerText = "⬆️ Number is greater than " + guess;
        message.className = "";
    } 
    else {
        attempts--;
        message.innerText = "⬇️ Number is less than " + guess;
        message.className = "";
    }

    document.getElementById("attempts").innerText = attempts;

    if (attempts === 0 && guess !== number) {
        message.innerText = "❌ GAME OVER! Number was " + number;
        message.className = "lose";
    }
}
setDifficulty();
