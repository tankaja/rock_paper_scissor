let player = 0;
let computer = 0;
let number = 0;

let computerLast = '';
let playerLast = '';

function pInput(value) {
    
    if (number == 1){
        reset (computerLast, playerLast);
        number = 0;
    }
    
    playerLast = value.path[0];
    playerLast.classList.add("pClicked");
    number = 1;
    return game(value.path[0].id);
}

function reset (computerLast, playerLast) {
    if (computerLast.classList)
    computerLast.classList.remove("cClicked");
    playerLast.classList.remove("pClicked");
}

document.getElementById('rock').addEventListener("click", pInput);
document.getElementById('paper').addEventListener("click", pInput);
document.getElementById('scissor').addEventListener("click", pInput);

function computerPlay() { 
    let num = Math.floor(Math.random() * (4 - 1) + 1);
    if (num == 1) {
        computerLast = document.getElementById("cRock");
        computerColor("Rock");
        return "Rock";
    }
    else if (num == 2) {
        computerLast = document.getElementById("cPaper");
        computerColor("Paper");
        return "Paper";
    }
    else {
        computerLast = document.getElementById("cScissor");
        computerColor("Scissor");
        return "Scissor";
    }
}

function computerColor(col) {
    if (col == "Rock")
        document.getElementById("cRock").classList.add("cClicked");
    else if (col == "Paper")
        document.getElementById("cPaper").classList.add("cClicked");
    else if (col == "Scissor")
        document.getElementById("cScissor").classList.add("cClicked");
    else
        return;
}

function playRound(playerSelection, computerSelection) {
    
    let display = document.getElementById("result");

    if(playerSelection == computerSelection)
        display.textContent =  ("Tie!");
    else if ((playerSelection == "Rock" && computerSelection == "Scissor") 
        || (playerSelection == "Scissor" && computerSelection == "Paper") 
        || (playerSelection == "Paper" && computerSelection == "Rock"))
        {
            player++;
            display.textContent = ("You Won! " + playerSelection + " beats " + computerSelection);
        }
    else
        {
            computer++;
            display.textContent = ("You Lost! " + computerSelection + " beats " + playerSelection);   
        }
}

function game(numb) {

    const computerSelection = computerPlay();
    
    let input = numb;
    let low = input.toLocaleLowerCase();
    let output = low.charAt(0).toUpperCase();

    for (j = 1; j < low.length; j++)
    {
        output += low.charAt(j)
    }
    
    if ((output != "Rock") && (output != "Paper") && (output != "Scissor"))
    {
        return console.log ("Invalid Input");
    }

    const playerSelection = output;
    playRound(playerSelection, computerSelection);
}


/* if (computer == player)
console.log("Tie!");
else if (computer > player)
console.log("You Lost!");
else if (player > computer)
console.log("You Won!");
else
console.log("No one Won!"); */