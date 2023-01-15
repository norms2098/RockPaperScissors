
function getComputerChoice()
{
    let computerChoices = ['rock','paper','scissors'];
    let randomNumber = Math.floor(Math.random()*computerChoices.length)
    return computerChoices[randomNumber]
}

function playGame(playerSelection,computerSelection,roundCounter){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let round = roundCounter;
    //print choices
    console.log(`Round ${round}:`)
    console.log(`User Choice: ${player}`);
    console.log(`Computer Choice: ${computer}`);

    //win conditions
    if((player === "rock" && computer === "scissors") || 
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")){
        return console.log(`You win! ${player} beats ${computer}.`)
    }
    else if(player === computer){
        return console.log(`It's a tie. You both chose ${player}`)
    }
    else{
        return console.log(`You lose. ${computer} beats ${player}`)
    }
    
}

function game(){
    for (let i=1;i<6;i++)
    {
        let playerChoice = prompt("Rock, Paper, or Scissors?");
        let pcChoice = getComputerChoice();
        console.log(playGame(playerChoice,pcChoice,i));
    }
}


console.log(game());
