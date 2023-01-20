
/*function getComputerChoice()
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
}*/

const gameMain = () =>{
    let playerScore=0,computerScore=0,round=0;
    const playGame = () =>{
        
        const btnRock = document.querySelector('.rock-button');
        const btnPaper = document.querySelector('.paper-button');
        const btnScissors = document.querySelector('.scissors-button');

        const playerChoices=[btnRock,btnPaper,btnScissors];
        const computerChoices=['rock','paper','scissors'];

        playerChoices.forEach(choices => {
            choices.addEventListener('click',function(){
                const roundCounter=document.querySelector('.rounds');
                round++;
                roundCounter.innerHTML=`Round ${round}`;
                let randomNumber = Math.floor(Math.random()*computerChoices.length);

                const computerDecision = computerChoices[randomNumber];
                winnerDecide(this.innerText,computerDecision);

                /*if(round==5){

                }*/
            })
        });
    }
    const winnerDecide = (player,computer) =>{
        const roundResult = document.querySelector('.results');
        const updatePlayerScore = document.querySelector('.playerscore-count');
        const updateComputerScore = document.querySelector('.computerscore-count');

        player=player.toLowerCase();
        computer=computer.toLowerCase();
        if((player === "rock" && computer === "scissors") || 
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")){
            roundResult.innerHTML=`You win! ${player} beats ${computer}.`;
            playerScore++;
            updatePlayerScore.innerHTML= `<p> ${playerScore}</p>`;
        }
        else if(player === computer){
            roundResult.textContent="Tie.";
        }
        else{
            roundResult.innerHTML=`You lose. ${computer} beats ${player}.`;
            computerScore++;
            updateComputerScore.textContent=computerScore;
        }
    }
    playGame();
}

gameMain();


