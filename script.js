
function getComputerChoice()
{
    let computerChoices = ['rock','paper','scissors'];
    let randomNumber = Math.floor(Math.random()*computerChoices.length)
    return computerChoices[randomNumber]
}

function playGame(playerSelection,computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    
    //print choices
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

/*function game(playerSelection,computerSelection){
    let user=playerSelection,pc=computerSelection;
    for(let i=0;i<5;i++){
        let userChoice = prompt("What is your choice?");
        let computerChoice = getComputerChoice();
        playGame(user,pc);
    }
}*/


const playerChoice = prompt("Rock, Paper, or Scissors?");
const pcChoice = getComputerChoice();
console.log(playGame(playerChoice,pcChoice));
