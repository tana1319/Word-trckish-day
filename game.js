let userBalance = 1000;  // Initial balance
let coinsEarned = 500;    // Coins earned
let correctAnswer = '22'; // The correct answer for Level 1

// Function to start the game
function startGame(level) {
    // Show game interface when user selects a level
    document.getElementById("game-interface").style.display = "block";
    document.getElementById("level-selection").style.display = "none";
    document.getElementById("result-message").innerHTML = "";
    resetGame();
}

// Function to fill words in the puzzle
function fillWord(value) {
    // Fill the next empty box
    let inputs = document.querySelectorAll('.word-box');
    for (let input of inputs) {
        if (!input.value) {
            input.value = value;
            break;
        }
    }
}

// Function to check if the answer is correct
function checkAnswer() {
    let userAnswer = '';
    let inputs = document.querySelectorAll('.word-box');
    for (let input of inputs) {
        userAnswer += input.value;
    }

    // Check if the answer is correct
    if (userAnswer === correctAnswer) {
        document.getElementById("result-message").innerHTML = "Congrats! You won!";
        userBalance += 100;  // Add 100 SMG to user balance
        document.getElementById("user-balance").innerHTML = userBalance + " SMG";

        // Redirect to next level or show level selection
        setTimeout(() => {
            alert("You won! Proceeding to the next level.");
            document.getElementById("game-interface").style.display = "none";
            document.getElementById("level-selection").style.display = "block";
        }, 1000);
    } else {
        document.getElementById("result-message").innerHTML = "Incorrect, try again!";
    }
}

// Function to reset the game interface
function resetGame() {
    let inputs = document.querySelectorAll('.word-box');
    inputs.forEach(input => input.value = '');  // Clear all word boxes
}￼Enter
