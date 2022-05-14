// let firstCard = Math.floor(Math.random() * 11) + 1;
// let secondCard = Math.floor(Math.random() * 11) + 1;\

let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

function startGame() {
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