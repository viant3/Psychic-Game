//scoring variables
var userWins = 0;
var userLoses = 0;
var guessesLeft = 9;
var lettersThisGame = [];



var compPossibles = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var psychicChoice = compPossibles[Math.floor(Math.random() * compPossibles.length)];

function compGuess() {
    psychicChoice = compPossibles[Math.floor(Math.random() * compPossibles.length)];
}


function resetVar() {
    guessesLeft = 9;
    lettersThisGame = [];
}

document.onkeyup = function (event) {
    //var to get user input
    var userTyped = event.key.toLowerCase();
   
    //var to popuate array with user key press

    lettersThisGame.push(userTyped);


    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessedThisGame = document.getElementById("lettersThisGame");



    if ((userTyped === psychicChoice) && (guessesLeft > 0)) {

        userWins++;
      

        console.log("You chose letter " + userTyped);
        console.log("The computer chose letter " + psychicChoice);
        console.log("It's a match! Your score is: " + userWins);

        resetVar();
        compGuess();
        guessedThisGame.textContent = "You guessed correctly! Try Again"
    }
    else if (guessesLeft == 1) {
      
        userLoses++;
        resetVar();
        compGuess();
        guessedThisGame.textContent = "Apparently you aren't Psychic... Try Again";
        console.log("Game over. Try again");
 
    }

    else  {

        guessesLeft--;
        guessedThisGame.textContent = "Letters guessed in this game: " + lettersThisGame;

        console.log("You chose letter " + userTyped);
        console.log("The computer chose letter " + psychicChoice);
        console.log("Number of guesses left: " + guessesLeft);
    }
   

    winsText.textContent = "Wins: " + userWins;
    lossesText.textContent = "Losses: " + userLoses;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
   


}
