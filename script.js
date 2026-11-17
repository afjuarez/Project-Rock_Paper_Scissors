
// *STEP 4* Created two variables w/ let so the variables can be updated as the game progresses. Initialized with the starting value of zero. Variables were made global, so that functions can interact with them.
// @@@let computerScore = 0
// @@@let humanScore = 0


// *STEP 5* Created the functions below so that an incremental change of +1 would be applied to the scores depending on which side won the round. The functions are called within the playRound function, specifically within the conditional statements segment
// @@@function computerScoreGain () {
//     computerScore += 1;
// }

// function humanScoreGain () {
//     humanScore += 1;
// }





// *STEP 2* Created a function named getComputerChoice. Inside, we create a variable named comChoice that holds a value returned by the Math.random function (this function returns a number btwn 0 & less than 1). The comChoice variable now holding the value is put through conditional statements that return a response based on the value held by comChoice, which was given to it by the Math.random function

// @@@@function getComputerChoice() {
//     const computerChoice = Math.random();
        
    
        
//         if (computerChoice >= 0 && computerChoice  <= 0.32) {
//             return 'rock';
//         }
        
//         else if (computerChoice  <= 0.66) {
//             return 'paper';
//         }
        
//         else {
//             return 'scissors';
//         }
// }@@@@


// *STEP 3* Created a function named getHumanChoice. Inside, we created a variable named humanChoice that will hold the value of the string entered by the user. This is done via the PROMPT method. We then return this value.
// @@@@function getHumanChoice() {
//     const humanChoice = prompt('You\'re competing against the computer in a game of \'Rock, Paper, Scissors\'. Please enter your selection from thee options below.');
//     return humanChoice;
// }@@@@

// *STEP 5* Created a function named playRound. Inside, we created a variable named insensitiveHumanChoice which is to take the prompted user selection and return it in all lower case. From here, the humanChoice & computerChoice are put through conditional statements with a particular combo returning the playerWins variable and all other combos returning the playerLoses variable.
// *STEP 5* playerWins, playerLoses, and Tie variables are to provide a result to the user and explain that they won, lost, or tied. These were moved from outside of the playRound function to inside it so that they could interact with the normalizedHumanChoice variable
// @@@@function playRound (humanChoice, computerChoice) {

//     const normalizedHumanChoice = humanChoice.toLowerCase()

//     const playerWins = 'You WIN! ' + normalizedHumanChoice + ' beats ' + computerChoice + '. Dare to test your luck again?';

//     const playerLoses ='You lost. ' + computerChoice + ' beats ' + normalizedHumanChoice  + '. Better luck next time.';

//     const tie = 'Tie. You and the computer both selected the same option. Play Again!'
    

//     if (normalizedHumanChoice === computerChoice){
//         console.log(tie + ' Your score: ' + humanScore + ' v. Computer\s score: ' + computerScore);
//     }
    
//     // Combined all 3 win conditions into 1 block
//     else if ((normalizedHumanChoice === 'rock' && computerChoice === 'scissors') || (normalizedHumanChoice === 'paper' && computerChoice === 'rock') || (normalizedHumanChoice === 'scissors' && computerChoice === 'paper')){
//         humanScoreGain()
//         console.log(playerWins + 'Your score: ' + humanScore + ' v. Computer\s score: ' + computerScore);
//     }

//     else {
//         computerScoreGain ()
//         console.log(playerLoses + ' Your score: ' + humanScore + ' v. Computer\s score: ' + computerScore);
//     }
// } @@@@ 


// *STEP 5* Selection variables are to obtain the values from their associated functions. These values are then passed as arguments to the playRound function call, which are then passed as the argument values for the parameters of playRound function.
// @@@const humanSelection = getHumanChoice();
// @@@const computerSelection = getComputerChoice();


// *STEP 5* Function call, passes humanSelection and computerSelection values as arguments to the parameters.
// @@@playRound(humanSelection, computerSelection);



// What to work on NEXT!!
// STEP 6

function playGame() {

    // Score Initialization
    let computerScore = 0
    let humanScore = 0

    // Score Gain-Com
    function computerScoreGain () {
    computerScore += 1;
    }

    // Score Gain-Human
    function humanScoreGain () {
    humanScore += 1;
    }

    // Prompt's User for their Choice
    function getHumanChoice() {
     const humanChoice = prompt('You\'re competing against the computer in a game of \'Rock, Paper, Scissors\'. Please type your answer in the box below.');
     return humanChoice;
    }

    // Obtains Com's choice via random number
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

    // playRound Function
    function playRound (human, computer) {

            // Normalizes Human Choice
        const normalizedHumanChoice = human.toLowerCase();


        // Result Strings
        const playerWins = 'You WIN! ' + normalizedHumanChoice + ' beats ' + computer + '. Dare to test your luck again?';

        const playerLoses ='You lost. ' + computer + ' beats ' + normalizedHumanChoice  + '. Better luck next time.';

        const tie = 'Tie. You and the computer both selected the same option. Play Again!'
    
    // Tie Condition
    if (normalizedHumanChoice === computer){
        console.log(tie + ' Your score: ' + humanScore + ' v. Computer\s score: ' + computerScore);
    }
    
    // Combined all 3 win conditions into 1 block
    else if ((normalizedHumanChoice === 'rock' && computer === 'scissors') || (normalizedHumanChoice === 'paper' && computer === 'rock') || (normalizedHumanChoice === 'scissors' && computer === 'paper')){
        humanScoreGain()
        console.log(playerWins + 'Your score: ' + humanScore + ' v. Computer\s score: ' + computerScore);
    }
    // Loss Condition
    else {
        computerScoreGain ()
        console.log(playerLoses + ' Your score: ' + humanScore + ' v. Computer\s score: ' + computerScore);
    }
   }
    // playRound Function Call 5x
   playRound(getHumanChoice(), getComputerChoice());
   playRound(getHumanChoice(), getComputerChoice());
   playRound(getHumanChoice(), getComputerChoice());
   playRound(getHumanChoice(), getComputerChoice());
   playRound(getHumanChoice(), getComputerChoice());
   
   function winner(){
    if (humanScore === computerScore){
        console.log('A competitive match. Neither you or the Computer were able to outdo one another. Final score is ' + humanScore + '-' + computerScore);
    }

    else if (humanScore > computerScore){
         console.log('Congratulations, you\'ve beaten the Computer with a score of ' + humanScore + '-' + computerScore);
    }
    else 
        console.log('Despite your best efforts, you\'ve been bested by the Computer with a final game score of ' + computerScore + '-' + humanScore + '. Better luck next time!');
   }

winner()
   
}
playGame()