let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Generates a random number 0-9
const generateTarget = () =>{
    return Math.floor((Math.random() * 9) + 1);
}


//Determines which player wins based on who is the closest to the target number.
//If there is a tie the human player wins
//True = human wins
//False = computer wins
const compareGuesses = (userGuess, compGuess, targetNum) =>{
    targetNum = generateTarget();
    let humanDifference = abs(targetNum - userGuess);
    let computerDifference = abs(targetNum - compGuess); //Use these two variables to determine how far off the guess is from the target and the smaller difference wins

    if(humanDifference === computerDifference){
        return true;
    }
    else if(humanDifference > computerDifference){
        return false;
    }
    return true; 
}

//Update score based off of who guessed the targetNumber
const updateScore = (winString) =>     {
    if(winString === 'human'){
        humanScore++;
    }
    else if(winString === 'computer'){
        computerScore++;
    }
}

//Update the round number of the game
const advanceRound = () =>{
    currentRoundNumber++;
}