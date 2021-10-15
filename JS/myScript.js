function computerPlay() {
    let choiceArray = ["Rock", "Paper", "Scissors"];
    let randomChoice =
        choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return randomChoice
}

function playRound(playerSelection, computerSelection) {
    let capitalized = caseInsensitive(playerSelection);

    if ((capitalized == "Rock" && computerSelection == "Paper") ||
        (capitalized == "Scissors" && computerSelection == "Rock") ||
        (capitalized == "Paper" && computerSelection == "Scissors")) {
        console.log(`You Lose! ${computerSelection} beats ${capitalized}`)
    }
    else if ((capitalized == "Rock" && computerSelection == "Scissors") ||
        (capitalized == "Scissors" && computerSelection == "Paper") ||
        (capitalized == "Paper" && computerSelection == "Rock")) {
        console.log(`You Win! ${capitalized} beats ${computerSelection}`)

    }
    else {
        console.log(`Its a tie! ${capitalized} ties with ${computerSelection} `)
    }
}

function caseInsensitive(playerSelection) {
    let lowerCase = playerSelection.toLowerCase();
    let firstLetter = lowerCase[0].toUpperCase();
    let restWord = lowerCase.substr(1);
    let fullWord = `${firstLetter}` + `${restWord}`
    return fullWord
}
const playerSelection = "ROCK";
const computerSelection = computerPlay();
console.log(caseInsensitive(playerSelection));
console.log(playRound(playerSelection, computerSelection));
