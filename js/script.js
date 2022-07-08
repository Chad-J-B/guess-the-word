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
const guessedLetters = [];

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
    //empty message paparagraph
    message.innerText = "";
    //grab what was entered in the input
    const guess = letterInput.value;
    //make sure it was a single letter
    const goodGuess = validatePlayerInput(guess);

    if(goodGuess){
        makeGuess(guess);
    }
    letterInput.value = "";
});

const validatePlayerInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/;
    if(input.length === 0) {
        message.innerText = "Please guess a letter.";
    }else if(input.length > 1) {
        message.innerText = "Only guess 1 letter at a time!";
    }else if(!input.match(acceptedLetter)) {
        message.innerText = "You can only guess a letter A to Z!";
    }else {
        return input;
    }
    
};

const makeGuess = function(guess) {
    guess = guess.toUpperCase();
    if(guessedLetters.includes(guess)) {
        message.innerText = "You've already guessed that letter!";
    } else{
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
    
};
