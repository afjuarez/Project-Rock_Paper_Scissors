
// Created a function named getComputerChoice. Inside, we create a variable named comChoice that holds a value returned by the Math.random function (this function returns a number btwn 0 & less than 1). The comChoice variable now holding the value is put through conditional statements that return a response based on the value held by comChoice, which was given to it by the Math.random function

function getComputerChoice() {
    const comChoice = Math.random();
        
    
        
        if (comChoice >= 0 && comChoice  <= 0.32) {
            return 'rock';
        }
        
        else if (comChoice  <= 0.66) {
            return 'paper';
        }
        
        else {
            return 'scissors';
        }
}


// Created a function named getHumanChoice. Inside, we created a variable named humanChoice that will hold the value of the string entered by the user. This is done via the PROMPT method. We then return this value.
function getHumanChoice() {
    const humanChoice = prompt('You\'re competing against the computer in a game of \'Rock, Paper, Scissors\'. Please enter your selection from thee options below.')
    return humanChoice
}