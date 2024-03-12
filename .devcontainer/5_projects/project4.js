let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#sub");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultpas");

const p = document.createElement("p");

let prevguess = [];
let numGuess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number more than 1");
  } else if (guess > 100) {
    alert("please enter a number less than 100");
  } else {
    prevguess.push(guess);
    if (numGuess === 10) {
      displayguess(guess);
      displayMessage(`game over. random number was ${randomNumber}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endgame();
  } else if (guess < randomNumber) {
    displayMessage(`number is to low`);
  } else if (guess > randomNumber) {
    displayMessage(`number is to high`);
  }
}

function displayguess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} ,`;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector("#newGame");
  newgamebutton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playgame = true;
  });
}
