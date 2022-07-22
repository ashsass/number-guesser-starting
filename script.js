let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Generates a random number 0-9
const generateTarget = () =>{
    return Math.floor((Math.random() * 9) + 1);
}