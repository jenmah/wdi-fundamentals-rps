'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* YOUR CODE HERE */

function getPlayerMove(move) {
    return move || getInput();
}


function getComputerMove(move) {
    return move || randomPlay();
}


function getWinner(playerMove, computerMove) {
var winner;
if (playerMove === computerMove) {
        winner = 'tie';
        console.log("It is a tie!");
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
        console.log("Player won this round!");
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'computer';
        console.log("The Computer won this round!");
    } else if (playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
        console.log("The Computer won this round!");
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
        console.log("Player won this round!");
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
        console.log("Player won this round!");
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'computer';
        console.log("The Computer won this round!");
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5)  {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        
        if (winner === 'player') {
            playerWins += 1;
        } else if (winner === 'computer') {
            computerWins += 1;
        }

    console.log('Player used ' + playerMove + ' and the Computer used ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    if (playerWins === 5) {
        console.log("Player wins the game!");
    } else {
        console.log("Computer wins the game!");
        return [playerWins, computerWins];
    }
}

playToFive();