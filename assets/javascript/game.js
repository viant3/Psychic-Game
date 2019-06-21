//scoring variables
var userWins = 0;
var userLoses = 0;
guessesLeft = 9;
var guessed = 0;

var compPossibles = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var userTypedText = document.getElementById("userTyped-text")
var compPossiblesText = document.getElementById("compPossibles-text");


document.onkeyup = function(event) {
//variable to get user input
var userTyped = event.key;

//variable for computer choice
var psychicChoice = compPossibles[Math.floor(Math.random() * compPossibles.length)];



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

    userLoses = 0;
    guessesLeft = 9;
    
    console.log("Game over. Try again");
    }

} 