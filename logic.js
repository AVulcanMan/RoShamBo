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
