const messageEl = document.getElementById("message-el");
const cardEl = document.getElementById("card-el");
const sumEl = document.getElementById("sum-el");

let firstCard = generateCard();
let secondCard = generateCard();
let cardArray = [];
let sum = 0;
console.log(sum);
isBlackJack = false;
isAlive = false;
let message = "";

function generateCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) return 11;
  else if (randomNumber > 10) return 1;
  else return randomNumber;
}

function startGame() {
  isAlive = true;
  cardArray.push(firstCard, secondCard);
  console.log(cardArray);
  sum = firstCard + secondCard;
  console.log(sum);
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cardArray.length; i++) {
    cardEl.textContent += cardArray[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    isBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  let card = generateCard();
  cardArray.push(card);
  sum += card;
  renderGame();
}
