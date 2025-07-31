const messageEl = document.getElementById("message-el");
const cardEl = document.getElementById("card-el");
const sumEl = document.getElementById("sum-el");
const moneyEl = document.getElementById("money-el");

let firstCard = generateCard();
let secondCard = generateCard();
let cardArray = [];
let sum = 0;
isBlackJack = false;
isAlive = false;
let message = "";
let amt = 30;

function generateCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) return 11;
  else if (randomNumber > 10) return 1;
  else return randomNumber;
}

function resetGame() {
  isAlive = false;
  isBlackJack = false;
  cardArray = [];
  sum = 0;
  messageEl.textContent = "Game reset! Press Start to play.";
  cardEl.textContent = "Cards:";
  sumEl.textContent = "Sum:";
  moneyEl.textContent = "User: " + amt + "$";
}

function startGame() {
  if (amt > 0) {
    isAlive = true;
    isBlackJack = false;
    firstCard = generateCard();
    secondCard = generateCard();
    cardArray = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
  }
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  sumEl.textContent = "Sum: " + sum;
  moneyEl.textContent = "User: " + amt + "$";
  for (let i = 0; i < cardArray.length; i++) {
    cardEl.textContent += cardArray[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    isBlackJack = true;
    amt += 20;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
    amt -= 10;
  }
  moneyEl.textContent = "User: " + amt + "$";

  messageEl.textContent = message;
  if (amt <= 0) {
    messageEl.textContent = "You have lost all your money!";
  }
}

function newCard() {
  if (isAlive && !isBlackJack) {
    let card = generateCard();
    cardArray.push(card);
    sum += card;
    renderGame();
  }
}
