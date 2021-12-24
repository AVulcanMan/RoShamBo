console.log("Hello World!");
/* Subproblems
- Have a computer generate rock, paper, or scissors
- Make sure console accepts VALID user inputs
- Take selections from both and determine a valid result
- Output the result
*/

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


let decision;
function playerPlay () {
    decision= prompt("What is your move?");
    decision= decision.toLowerCase();
    return (decision);
}


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
        return ("You lose. Rock beats scissors.");
    }  else {
        return ("It's a tie!");
    }
}


function game () {
    for (var i=0; i<5; i++){
        console.log(playRound());
    }
   console.log(`${playerScore} - ${compScore}`);
}
game();
function consistency () {
    for (var i=0; i<50; i++){
        console.log(computerPlay());
    }
}