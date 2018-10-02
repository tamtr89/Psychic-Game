console.log("hitam");


// An array that list of all letter under computer's guess//
var computerLetters = ["t", "a", "m", "c", "o", "d", "e"];

// An array that list of all letter under user's guess//
var userLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];

// Varible for win and lose//
var wins = 0;
var loses = 0;
var guessLeft = 9;
var guessedChoices = [];

// 
var directionKey = document.getElementById("directionKey");
var winNumber = document.getElementById("win-number");
var loseNumber = document.getElementById("losses-number");
var guessLeft = document.getElementById("guess-left");
var userGuess = document.getElementById("guessed");


resetGame();
display();

// Determines which key was pressed.

document.onkeyup = function (event) {

    var userGuess = event.key;


    // Randomly chooses a choice from the option array. Computer's choices
    var computerAns = computerLetters[Math.floor(Math.random() * computerLetters.length)];

    // This logic determines the outcome of the game.
    if (userGuess === computerAns) {
        wins++;
        guessLeft = 8;
    }
    else {
        guessLeft--;
    }
    if (guessLeft === 0) {
        loses++;
        guessLeft = 8;
    }

};
