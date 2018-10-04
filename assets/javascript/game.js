
console.log("HI TAM");

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


// Determines which key was pressed.

document.onkeyup = function (event) {
    
    console.log(computerAns);
    var userGuess = event.key;
    userGuessSoFar.push(userGuess);
    guessSoFar.textContent = "Your guesses so far: " + userGuessSoFar;
    
    // This logic determines the outcome of the game.
    
    if (userGuess === computerAns) {
        wins++;
        guesses = 9;    
        userGuessSoFar = [];
        winNumber.textContent = "Wins: " + wins;
        computerAns = alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        else {
            guesses--;
            left.textContent = "Guesses left: " + guesses;           
        }

        if (guesses === 0) {
            losses++;
            loseNumber.textContent = loseNumber + losses;
            guesses = 9;        
            userGuessSoFar = [];
            loseNumber.textContent = "Lose: " + losses;
            computerAns = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
    };

// Click button to reset game // Extra TRY using click function
var resetGame = document.getElementById("reset");
resetGame.addEventListener("click", myFuntion);
function myFuntion() {
    console.log(resetGame);

    if (losses === 5) {
        wins = 0;
        winNumber.textContent = "Wins: " + wins;
        losses = 0;
        loseNumber.textContent = "Lose: " + losses;
        guesses = 9;
        userGuessSoFar = [];
        left.textContent = "Guesses left: " + guesses;
        guessSoFar.textContent = "Your guesses so far: " + userGuessSoFar;
        computerAns = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
}



// Display on screen //
winNumber.textContent = "Wins: " + wins;
left.textContent = "Guesses left: " + guesses;
loseNumber.textContent = "Lose: " + losses;
guessSoFar.textContent = "Your guesses so far: " + userGuessSoFar;



