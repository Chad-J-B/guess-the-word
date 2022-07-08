// unordered list of guessed letters// 
const guessedLettersElement = document.querySelector(".guessed-letters");
// Guess button //
const guessButton = document.querySelector(".guess");
//text input where player guesses letter//
const letterInput = document.querySelector(".letter");
//paragraph where word appears//
const wordInProgress = document.querySelector(".word-in-progress");
//paragraph with remaining guesses//
const remainingGuessesElement = document.querySelector(".remaining");
//span inside paragraph with remaining guesses//
const remainingGuessesSpan = document.querySelector("span");
//paragraph where messages appear when player guesses letter//
const message = document.querySelector(".message");
//hidden button for play again//
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

const placeHolder = function(word) {
    const placeHolderLetters = [];
    for(const letter of word) {
        console.log(letter);
        placeHolderLetters.push("●")
    }
    wordInProgress.innerText= placeHolderLetters.join("");
};

placeHolder(word);

guessButton.addEventListener("click", function(e){
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});