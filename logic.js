console.log('Hello World!');
/* Subproblems
- Have a computer generate rock, paper, or scissors
- Make sure console accepts VALID user inputs
- Take selections from both and determine a valid result
- Output the result
*/

// Random number function to generate comp's move
let compChoice;
let num;

function computerPlay () {
    num= Math.floor (Math.random()*3+1);
    if (num==1){
        compChoice= 'rock';
    } else if (num==2) {
        compChoice='scissors';
    } else {
        compChoice='paper';
    }
    return (compChoice);
}

//Prompt to ask player their move
let decision;
function playerPlay () {
    decision= prompt('What is your move?');
    decision= decision.toLowerCase();
    return (decision);
}

// Score system, logic to determine result, and output result of the game
let playerScore=0;
let compScore=0;
function playRound () {
    let playerSelection= playerPlay();
    let computerSelection= computerPlay();
    console.log(playerSelection, computerSelection);
    if (playerSelection=='rock' && computerSelection=='scissors' || playerSelection=='scissors' && computerSelection=='paper' || playerSelection=='paper' && computerSelection=='rock') {
        playerScore++;
        return(`You win ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection=='scissors' && computerSelection=='rock' || playerSelection=='paper' && computerSelection=='scissors' || playerSelection=='rock' && computerSelection=='paper'){
        compScore++;
        return (`You lose. ${computerSelection} beats ${playerSelection}."`);
    }  else {
        return ("It's a tie!");
    }
}

// Run playRound(); five times for a match best of 5
function game () {
    compScore=0;
    playerScore=0;
    for (var i=0; i<5; i++){
        console.log(playRound());
    }
   console.log(`${playerScore} - ${compScore}`);
}
game();
