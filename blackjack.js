// let firstCard = Math.floor(Math.random() * 11) + 1;
// let secondCard = Math.floor(Math.random() * 11) + 1;\


let hasBlackJack = false
let isAlive = false
let message = ""
let cards = []
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function getRandomNumber() {
    let number = Math.floor(Math.random() * 13) + 1
    if (number === 1) {
        number = 11
    } else if (number > 10) {
        number = 10
    }
    return number
}


function startGame() {
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    isAlive = true
    hasBlackJack = false
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";

    }
    if (sum <= 20) {
        message = "Do you still want to draw another card?"
    } else if (sum === 21) {
        message = "Wohoooo!! BlackJack"
        hasBlackJack = true
    } else {
        message = "You Lost"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    if (!isAlive || hasBlackJack) {
        return
    }
    let card = getRandomNumber()
    sum += card
    cards.push(card)
    renderGame()
}