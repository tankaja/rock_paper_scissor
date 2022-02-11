let player = 0;
let computer = 0;

function computerPlay() { 
    let num = Math.floor(Math.random() * (4 - 1) + 1);
    if (num == 1)
    return "Rock";
    else if (num == 2)
    return "Paper";
    else 
    return "Scissor";
}

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection == computerSelection)
        return ("Tie!");
    else if ((playerSelection == "Rock" && computerSelection == "Scissor") 
        || (playerSelection == "Scissor" && computerSelection == "Paper") 
        || (playerSelection == "Paper" && computerSelection == "Rock"))
        {
            player++;
            return ("You Won! " + playerSelection + " beats " + computerSelection);
        }
    else
        {
            computer++;
            return ("You Lost! " + computerSelection + " beats " + playerSelection);   
        }
}

function game() {

    for (i = 0; i < 5; i++)
    {
        const computerSelection = computerPlay();
        
        let input = window.prompt("What will you choose?");
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
        console.log (playRound(playerSelection, computerSelection));
    }

    if (computer == player)
        console.log("Tie!")
    else if (computer > player)
        console.log("You Lost!")
    else if (player > computer)
        console.log("You Won!")
    else
        console.log("No one Won!")
}

game();
