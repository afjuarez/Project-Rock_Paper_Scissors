
// Created two variables w/ let so the variables can be updated as the game progresses. Initialized with the starting value of zero. Variables were made global, so that functions can interact with them.
let computerScore = 0
let humanScore = 0









// Created a function named getComputerChoice. Inside, we create a variable named comChoice that holds a value returned by the Math.random function (this function returns a number btwn 0 & less than 1). The comChoice variable now holding the value is put through conditional statements that return a response based on the value held by comChoice, which was given to it by the Math.random function

function getComputerChoice() {
    const computerChoice = Math.random();
        
    
        
        if (computerChoice >= 0 && computerChoice  <= 0.32) {
            return 'rock';
        }
        
        else if (computerChoice  <= 0.66) {
            return 'paper';
        }
        
        else {
            return 'scissors';
        }
}


// Created a function named getHumanChoice. Inside, we created a variable named humanChoice that will hold the value of the string entered by the user. This is done via the PROMPT method. We then return this value.
function getHumanChoice() {
    const humanChoice = prompt('You\'re competing against the computer in a game of \'Rock, Paper, Scissors\'. Please enter your selection from thee options below.');
    return humanChoice;
}

// Created a function named playRound. Inside, we created a variable named insensitiveHumanChoice which is to take the prompted user selection and return it in all lower case. From here, the humanChoice & computerChoice are put through conditional statements with a particular combo returning the playerWins variable and all other combos returning the playerLoses variable.
function playRound (humanChoice, computerChoice) {
    

    if (humanChoice === computerChoice){
        console.log(tie);
    }
    
    else if (humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log(playerWins)
    }

    
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(playerWins);
    }
    
    
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(playerWins);
    }


    

    else {
        console.log(playerLoses);
    }
}   


// Variables must be positioned in this order so that each is defined prior to the moment it is called upon. If we were to have the playerWins variable declared prior to the humanSelection variable, it would fail to execute because humanSelection is mentioned within playerWins. *Uncaught ReferenceError: Cannot access 'humanSelection' before initialization*


// Selection variables are to obtain the values from their associated functions. These values are then passed as arguments to the playRound function call, which are then passed as the argument values for the parameters of playRound function.
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// playerWins, playerLoses, and Tie variables are to provide a result to the user and explain that they won, lost, or tied.
const playerWins = 'You WIN! ' + humanSelection + ' beats ' + computerSelection + '. Dare to test your luck again?';
const playerLoses ='You lost. ' + computerSelection + ' beats ' + humanSelection  + '. Better luck next time.';
const tie = 'Tie. You and the computer both selected the same option. Play Again!'



// Function call, passes humanSelection and computerSelection values as arguments to the parameters.
playRound(humanSelection.toLowerCase(), computerSelection);



// What to work on NEXT!!
// 1.Potentially setting up prompts that return result variables and allow the user to play again w/o refreshing by providing a input field.
