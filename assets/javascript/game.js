//scoring variables
var userWins = 0;
var userLoses = 0;
var guessesLeft = 9;
var guessed = 0;

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var userTypedText = document.getElementById("userTyped-text")
var computerChoiceText = document.getElementById("computerchoice-text");


document.onkeyup = function(event) {
//variable to get user input
var userTyped = event.key;

//variable for computer choice
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log("You chose letter " + userTyped);
console.log("The computer chose letter " + computerGuess);



if (userTyped === computerGuess) {
    userWins++;
    console.log("your score is " + userWins);
// } else {
//         guessesLeft--;
//         guessed++;
//         if(guessed === 9) {
//  userLoses++;
// }
//     }
//
    }
} 