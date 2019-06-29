//scoring variables
var userWins = 0;
var userLoses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var lettersThisGame = [];

var compPossibles = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


document.onkeyup = function (event) {
    //var to get user input
    var userTyped = event.key;

    //var to popuate array with user key press
    lettersGuessed.push(userTyped);
    lettersThisGame.push(userTyped);

    //var for computer choice

    var psychicChoice = compPossibles[Math.floor(Math.random() * compPossibles.length)];


    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessedThisGame = document.getElementById("lettersThisGame");
    var guessedText = document.getElementById("guessedText");


    if ((userTyped === psychicChoice) && (guessesLeft > 0)) {
        userWins++;

        guessesLeft = 9;
        lettersThisGame = [];

        console.log("You chose letter " + userTyped);
        console.log("The computer chose letter " + psychicChoice);
        console.log("It's a match! Your score is: " + userWins);
    }
    else if (guessesLeft > 0) {

        guessesLeft--;


        console.log("You chose letter " + userTyped);
        console.log("The computer chose letter " + psychicChoice);
        console.log("Not a match. Number of losses so far: " + userLoses);
        console.log("Number of guesses left: " + guessesLeft);
    }
    else {

        // reset the game variables 
        userLoses++;
        guessesLeft = 9;
        lettersThisGame = [];

        console.log("Game over. Try again");
    }

    winsText.textContent = "Wins: " + userWins;
    lossesText.textContent = "Losses: " + userLoses;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    guessedThisGame.textContent = "Letters guessed in this game: " + lettersThisGame;
    guessedText.textContent = "Total letters picked: " + lettersGuessed;

}
