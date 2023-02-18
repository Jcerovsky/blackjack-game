
let cardsEl = document.querySelector("#cards-id")
let sumEl = document.querySelector("#sum-id")
let newCardEl = document.getElementById("newCar-btn")

let playEl = document.getElementById('play-id')

let player = {
    name: 'Jakub',
    money: 100
}


let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ': $' + player.money


let cardsArr = []
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = '';


function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsArr.push(firstCard,secondCard)
    sum += firstCard + secondCard;

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i =0; i < cardsArr.length; i++) {
         cardsEl.textContent += cardsArr[i] + ' ';
    }
    // cardsEl.textContent = "Cards: " + cardsArr[0] + ', ' + cardsArr[1]
    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = 'Would you like to draw a new card?'
    }
    else if (sum > 21 && sum < 100)  {
        message = 'You lost :('
        isAlive = false;
    }
    else if (sum === 21) {
        message = 'Blackjack!!!'
        hasBlackJack = true;
    }

    else {
        message = 'Stop clicking NEW CARD';
    }

    playEl.innerText = message;

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard();
        cardsArr.push(newCard)
        sum += newCard;

        renderGame()
    }
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber > 10) {
        return  10
    }
    return randomNumber

}