let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")

const lowOrHi = document.querySelector(".lowOrHi ")
const startover = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let guessCount = 0

let playgame = true

if (playgame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess) 
    })
    
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else if (guess < 1){
        alert("Please enter a Number greater than 1")
        
    } else if (guess > 100){
        alert("Please enter a Number less than 100")
    } else{
        prevGuess.push(guess)
        guessCount++
        if (guessCount >10) {
            cleanUpGuess(guess)
            displayMessage(`Game Over!! Random number was ${randomNumber}`)
            endGame()
        } else{
            cleanUpGuess(guess)
            checkGuess(guess)
        }

    }
    
}


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("🎉 Great!!! You Guessed it Right!!!")
        endGame()
    } else if (guess > randomNumber){
        displayMessage("NOOO! Number is too High")
    } else if (guess < randomNumber){
        displayMessage("Nope!!! Number is too Low")
    }
    
}


function cleanUpGuess(guess) {
    userInput.value = ""
    guessSlot.innerHTML += `${guess} ,`
    remaining.innerHTML = `${10-guessCount}`
}


function displayMessage(message) {
    lowOrHi.textContent = message
}


function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled", "true")
    p.classList.add("button")
    p.innerHTML = `<button id="newGame">Start New Game</button>`
    startover.appendChild(p)
    playgame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", function () {
        randomNumber =  parseInt(Math.random()*100+1)
        prevGuess = []
        guessCount = 0
        guessSlot.innerHTML = ""
        remaining.innerHTML = "10"
        userInput.removeAttribute("disabled")
        startover.removeChild(p)
        lowOrHi.textContent = "";
        playgame = true

        
    })

}