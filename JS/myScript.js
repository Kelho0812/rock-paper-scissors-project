
// First we create 2 variables to store the score of the Player & the score of the Computer and set them both to 0

let playerScore = 0;
let computerScore = 0;

// Now we create a function to determine the play from the Computer. We do so by creating 3 choices, then making a random choice between the 3 and then returning the value.

function computerPlay() {
    let choiceArray = ["Rock", "Paper", "Scissors"];
    let randomChoice =
        choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return randomChoice
}

function caseInsensitive(Word) {
    let lowerCase = Word.toLowerCase();
    let firstLetter = lowerCase[0].toUpperCase();
    let restWord = lowerCase.substr(1);
    let fullWord = `${firstLetter}` + `${restWord}`
    return fullWord
}

function playerSelection() {
    let capitalized = caseInsensitive(prompt("Make your selection", "Rock"));
    return capitalized
}

function playRound(play1, play2) {
    let computerWins = `You Lose! ${play2} beats ${play1}`;
    let playerWins = `You Win! ${play1} beats ${play2}`;
    let tie = `Its a tie! ${play1} ties with ${play2}`;
    if ((play1 == "Rock" && play2 == "Paper") ||
        (play1 == "Scissors" && play2 == "Rock") ||
        (play1 == "Paper" && play2 == "Scissors")) {
        computerScore++
        return computerWins + ` Computer Score - ${computerScore} <==> ${playerScore} - Player Score`
    }
    else if ((play1 == "Rock" && play2 == "Scissors") ||
        (play1 == "Scissors" && play2 == "Paper") ||
        (play1 == "Paper" && play2 == "Rock")) {
        playerScore++
        return playerWins + ` Computer - ${computerScore} <==> ${playerScore} - Player`
    }
    else {
        return tie + ` Computer Score - ${computerScore} <==> ${playerScore} - Player Score`
    }
}

function Game() {
    let gameLost = `You LOST the game! Computer wins ${computerScore} - ${playerScore}!`
    let gameWon = `You WON the game! Player wins ${playerScore} - ${computerScore}!`
    let gameTied = `It's a tie! The result is ${playerScore} - ${computerScore}!`

    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection(), computerPlay()));
    }
    if (computerScore > playerScore) {
        console.log((`You LOST the game! Computer wins ${computerScore} - ${playerScore}!`))
    }

    else if (computerScore < playerScore) {
        console.log((`You WON the game! Player wins ${playerScore} - ${computerScore}!`))
    }

    else {
        console.log((`It's a tie! The result is ${playerScore} - ${computerScore}!`))
    }
}