function computerPlay() {
    let choiceArray = ["Rock", "Paper", "Scissors"];
    let randomChoice =
        choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return randomChoice
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Scissors" && computerSelection == "Rock") ||
        (playerSelection == "Paper" && computerSelection == "Scissors")) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)

    }
    else {
        console.log(`Its a tie! ${playerSelection} ties with ${computerSelection} `)
    }
}

function caseInsensitive(playerSelection) {
    let lowerCase = playerSelection.toLowerCase();
    let firstLetter = lowerCase[0].toUpperCase();
    let restWord = lowerCase.substr(1);
    let fullWord = `${firstLetter}` + `${restWord}`
    fullWord = playerSelection;
}
const playerSelection = "Rock";
const computerSelection = computerPlay();
caseInsensitive(playerSelection);
console.log(playRound(playerSelection, computerSelection));
