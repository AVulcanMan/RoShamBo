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
    let playerScore=0;
    let compScore=0;
    console.log(playerSelection, computerSelection);
    if (playerSelection=='rock' && computerSelection=='scissors') {
        return("You Win! Rock beats scissors");
        playerScore++;
    } else if (playerSelection=='scissors' && computerSelection=='rock'){
        return ("You lose. Rock beats scissors.");
        compScore++;
    } else if (playerSelection=='scissors' && computerSelection=='paper'){
        return ("You win! Scissors beats paper");
        playerScore++;
    } else if (playerSelection=='paper' && computerSelection=='scissors'){
        return ("You lose. Scissors beats paper.");
        compScore++;
    } else if (playerSelection=='paper' && computerSelection=='rock'){
        return ("You win! Paper beats rock");
        playerScore++;
    } else if (playerSelection=='rock' && computerSelection=='paper'){
        return ("You lose. Paper beats rock.");
        compScore++;
    } else {
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
