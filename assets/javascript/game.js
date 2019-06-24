//scoring variables
var userWins = 0;
var userLoses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

var compPossibles = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


document.onkeyup = function (event) {
    //var to get user input
    var userTyped = event.key;

    //var to popuate array with user key press
    lettersGuessed.push(userTyped);


    //var for computer choice

    var psychicChoice = compPossibles[Math.floor(Math.random() * compPossibles.length)];


    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessedText = document.getElementById("guessedText");


    if ((userTyped === psychicChoice) && (guessesLeft > 0)) {
        userWins++;

        console.log("You chose letter " + userTyped);
        console.log("The computer chose letter " + psychicChoice);

        console.log("It's a match! Your score is: " + userWins);
    }
    else if ((userLoses < 9) && (guessesLeft > 0)) {

        userLoses++;
        guessesLeft--;


        console.log("You chose letter " + userTyped);
        console.log("The computer chose letter " + psychicChoice);

        console.log("Not a match. Number of losses so far: " + userLoses);
        console.log("Number of guesses left: " + guessesLeft);
    }
    else {

        // reset the game variables 
        userLoses = 0;
        guessesLeft = 9;
        userWins = 0;
        lettersGuessed = [];

        console.log("Game over. Try again");
    }

    winsText.textContent = "wins: " + userWins;
    lossesText.textContent = "losses: " + userLoses;
    guessesLeftText.textContent = "guesses left: " + guessesLeft;
    guessedText.textContent = "Letters guessed so far: " + lettersGuessed;

}
