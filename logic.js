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


function playRound () {
    let playerSelection= playerPlay();
    let computerSelection= computerPlay();
    if (playerSelection=='rock' && computerSelection=='scissors') {
        return("You Win! Rock beats scissors");
    } else if (playerSelection=='scissors' && computerSelection=='rock'){
        return ("You lose. Rock beats scissors.");
    } else if (playerSelection=='scissors' && computerSelection=='paper'){
        return ("You win! Scissors beats paper");
    } else if (playerSelection=='paper' && computerSelection=='scissors'){
        return ("You lose. Scissors beats paper.");
    } else if (playerSelection=='paper' && computerSelection=='rock'){
        return ("You win! Paper beats rock");
    } else if (playerSelection=='rock' && computerSelection=='paper'){
        return ("You lose. Paper beats rock.");
    } else {
        return ("It's a tie!");
    }
}

