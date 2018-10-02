
console.log("HI TAM");

// An array that list of all letter under computer's guess//


// An array that list of all letter under user's guess//
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];

// Varible for win and lose//
var wins = 0;
var losses = 0;
var guesses = 9;
var userGuessSoFar = [];

// 
var directionKey = document.getElementById("directionKey");
var winNumber = document.getElementById("wins");
var left = document.getElementById("guesses-left");
var loseNumber = document.getElementById("losses");
var guessSoFar = document.getElementById("guess-so-far");




// Randomly chooses a choice from the option array. Computer's choices
var computerAns = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerAns);

// Determines which key was pressed.

document.onkeyup = function (event) {

    var userGuess = event.key;
    userGuessSoFar.push(userGuess);
    guessSoFar.textContent = "Your guesses so far: " + userGuessSoFar;
    
    // This logic determines the outcome of the game.
    if (userGuess === computerAns) {
        wins++;
        guesses = 8;
        userGuessSoFar = [];
        winNumber.textContent = "Wins: " + wins;     
    }

    else {
        guesses--;
        left.textContent = "Guesses left: " + guesses;
    }
      

    if (guesses === 0) {
        losses++;
        loseNumber.textContent = loseNumber + losses;
        userGuessSoFar = [];
        guesses = 9;
        loseNumber.textContent = "Lose: " + losses;    
    }

};

    // Display on screen //
    winNumber.textContent = "Wins: " + wins; 
    left.textContent = "Guesses left: " + guesses;
    loseNumber.textContent = "Lose: " + losses;
    guessSoFar.textContent = "Your guesses so far: " + userGuessSoFar;

