let cont = 0
let gameFinished = false

let turn = document.getElementById("turn")
let title = document.getElementById("title")
let grid = document.getElementsByClassName("box")
let resetBTN = document.getElementById("reset")

function startGame() {
    title.style.display = "none"

    for (let i = 0; i < grid.length; i++) {
        grid[i].style.display = "flex"
    }

    resetBTN.style.display = "block"

    turn.style.display = "block"
    turn.innerHTML = "Your turn ==> X"
}


function play(event) {
    if (event.innerHTML === '' && !gameFinished) {
        if (cont % 2 === 0) {
            event.innerHTML = 'X'
            cont++
            turn.innerHTML = "Your turn ==> O"
        } else {
            event.innerHTML = 'O'
            cont++
            turn.innerHTML = "Your turn ==> X"
        }
    }
    checkGameStatus()
}


function reset() {
    let grid = document.getElementsByClassName("box")
    for (let i = 0; i < grid.length; i++) {
        grid[i].innerHTML = ""
    }
    for (let i = 0; i < grid.length; i++) {
        grid[i].style.color = "white"
    }
    cont = 0
    turn.innerHTML = "Your turn ==> X"
    turn.style.color = "white"
    gameFinished = false;
}

function checkGameStatus() {
    let gridComplete = true;
    let xWins = false;
    let oWins = false;
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].innerHTML === "") {
            gridComplete = false
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            let player = ""
            if (j % 2 === 0) {
                player = "X"
            } else {
                player = "O"
            }
            // Check horizontal coincidences
            if (grid[1 + 3 * i - 1].innerHTML === player && grid[2 + 3 * i - 1].innerHTML === player && grid[3 + 3 * i - 1].innerHTML === player) {
                grid[1 + 3 * i - 1].style.color = "red"
                grid[2 + 3 * i - 1].style.color = "red"
                grid[3 + 3 * i - 1].style.color = "red"
                if (player === "X") {
                    xWins = true
                } else {
                    oWins = true
                }
            }

            //Check vertical coincidences
            if (grid[0 + i].innerHTML === player && grid[3 + i].innerHTML === player && grid[6 + i].innerHTML === player) {
                grid[0 + i].style.color = "red"
                grid[3 + i].style.color = "red"
                grid[6 + i].style.color = "red"
                if (player === "X") {
                    xWins = true
                } else {
                    oWins = true
                }
            }

            // Check diagonal coincidences
            if (grid[0].innerHTML === player && grid[4].innerHTML === player && grid[8].innerHTML === player) {
                grid[0].style.color = "red"
                grid[4].style.color = "red"
                grid[8].style.color = "red"
                if (player === "X") {
                    xWins = true
                } else {
                    oWins = true
                }
            }
            if (grid[2].innerHTML === player && grid[4].innerHTML === player && grid[6].innerHTML === player) {
                grid[2].style.color = "red"
                grid[4].style.color = "red"
                grid[6].style.color = "red"
                if (player === "X") {
                    xWins = true
                } else {
                    oWins = true
                }
            }
        }
    }

    if (xWins) {
        turn.innerHTML = "X wins"
        gameFinished = true
    }

    if (oWins) {
        turn.innerHTML = "O wins"
        gameFinished = true
    }

    if (gridComplete && !(xWins || oWins) ) {
        turn.innerHTML = "Game has finished"
        gameFinished = true
    }

    if(turn.innerHTML === "Game has finished") {
        turn.style.color = "yellow"
    }

    if(xWins || oWins) {
        turn.style.color = "green"
    }
}