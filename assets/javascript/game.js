let words = ["pizza", "tacos", "noodles", "curry"];
let randomWord = " ";
let wordLength = [];
let spaces = 0;
let spacesLeft = [];
let wrongLetter = [];

let wins = 0;
let losses = 0;
let guessesLeft = 7;

function playHangman() {
  randomWord = words[Math.floor(Math.random() * words.length)];

  wordLength = randomWord.split("");

  spaces = wordLength.length;

  for (let i = 0; i < spaces; i++) {
    spacesLeft.push("_");
  }

  document.getElementById("currentword").innerHTML = " " + spacesLeft.join(" ");

  console.log(randomWord, spacesLeft, spaces, wordLength);
}

let pizza = document.getElementById("pizza");

function img() {
  if (randomWord === words[0]) {
    document.getElementById("image").src = "./assets/images/pizza.jpg";
  }
}

function reset() {
  guessesLeft = 7;
  wrongLetter = [];
  spacesLeft = [];
  playHangman();
}

function referee(letter) {
  let actualLetters = false;

  for (let i = 0; i < spaces; i++) {
    if (randomWord[i] == letter) {
      actualLetters = true;
    }
  }
  if (actualLetters) {
    for (let i = 0; i < spaces; i++) {
      if (randomWord[i] == letter) {
        spacesLeft[i] = letter;
      }
    }
  } else {
    wrongLetter.push(letter);
    guessesLeft--;
  }
}
function complete() {
  console.log(
    "wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesLeft
  );

  if (wordLength.toString() == spacesLeft.toString()) {
    wins++;
    img();
    reset();

    document.getElementById("winscounter").innerHTML = " " + wins;
  } else if (guessesLeft === 0) {
    losses++;
    reset();
    document.getElementById("image").src = "./assets/images/";
    document.getElementById("loss").innerHTML = " " + losses;
  }

  document.getElementById("currentword").innerHTML = " " + spacesLeft.join(" ");
  document.getElementById("guessesleft").innerHTML = " " + guessesLeft;
}

playHangman();

document.onkeyup = function (event) {
  let guesses = String.fromCharCode(event.keyCode).toLowerCase();
  referee(guesses);
  complete();

  console.log(guesses);

  document.getElementById("playerguesses").innerHTML =
    "  " + wrongLetter.join(" ");
};
