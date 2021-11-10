// First we create 2 variables to store the score of the Player & the score of the Computer and set them both to 0

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0

const container = document.querySelector('.gameLog');

const content = document.createElement('div');


// Now we create a function to determine the play from the Computer. We do so by creating 3 choices, then making a random choice between the 3 and then returning the value.

function computerPlay() {
    let choiceArray = ["Rock", "Paper", "Scissors"];
    let randomChoice =
        choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return randomChoice;
}

function caseInsensitive(Word) {
    let lowerCase = Word.toLowerCase();
    let firstLetter = lowerCase[0].toUpperCase();
    let restWord = lowerCase.substr(1);
    let fullWord = `${firstLetter}` + `${restWord}`;
    return fullWord;
}

function playerSelection() {
    let capitalized = caseInsensitive(prompt("Make your selection", "Rock"));
    return capitalized;
}

function playRound(play1, play2) {
    const cpuScore = document.getElementById('computerScore')
    const player1score = document.getElementById('playerScore')
    let computerWins = `Round  ${roundNumber} - You Lose! ${play2} beats ${play1}`;
    let playerWins = `Round  ${roundNumber} - You Win! ${play1} beats ${play2}`;
    let tie = `Round  ${roundNumber} - Its a tie! ${play1} ties with ${play2}`;
    if (
        (play1 == "Rock" && play2 == "Paper") ||
        (play1 == "Scissors" && play2 == "Rock") ||
        (play1 == "Paper" && play2 == "Scissors")
    ) {
        computerScore++;
        roundNumber++;
        cpuScore.textContent = computerScore;
        player1score.textContent = playerScore;
        content.classList.add('content');
        content.textContent = computerWins;
        container.appendChild(content);
        return (
            computerWins +
            ` Computer Score - ${computerScore} <==> ${playerScore} - Player Score`
        );
    } else if (
        (play1 == "Rock" && play2 == "Scissors") ||
        (play1 == "Scissors" && play2 == "Paper") ||
        (play1 == "Paper" && play2 == "Rock")
    ) {
        playerScore++;
        roundNumber++;
        player1score.textContent = playerScore;
        cpuScore.textContent = computerScore;
        content.classList.add('content');
        content.textContent = playerWins;
        container.appendChild(content);
        return (
            playerWins +
            ` Computer - ${computerScore} <==> ${playerScore} - Player`
        );
    } else {
        roundNumber++;
        cpuScore.textContent = computerScore;
        player1score.textContent = playerScore;
        content.classList.add('content');
        content.textContent = tie;
        container.appendChild(content);
        return (
            tie +
            ` Computer Score - ${computerScore} <==> ${playerScore} - Player Score`
        );
    }
}

function rockChoice() {
    console.log(playRound("Rock", computerPlay()));
}

function paperChoice() {
    console.log(playRound("Paper", computerPlay()));
}

function scissorsChoice() {
    console.log(playRound("Scissors", computerPlay()));
}

// if (computerScore > playerScore) {
//     console.log(
//         `You LOST the game! Computer wins ${computerScore} - ${playerScore}!`
//     );
// } else if (computerScore < playerScore) {
//     console.log(
//         `You WON the game! Player wins ${playerScore} - ${computerScore}!`
//     );
// } else {
//     console.log(`It's a tie! The result is ${playerScore} - ${computerScore}!`);
// }

const images = document.querySelectorAll("img");
const rockImage = document.querySelector("#rockImage");
const paperImage = document.getElementById("paperImage");
const scissorsImage = document.getElementById("scissorsImage");

images.forEach((img) => {
    // and for each one we add a 'click' listener
    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.1)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1.0)";
    });

    img.addEventListener("mousedown", () => {
        // img.style.borderWidth = "5px";
        img.style.borderColor = "#fff";
    });
    img.addEventListener("mouseup", () => {
        img.style.borderWidth = "";
        img.style.borderColor = "";
    });
});

rockImage.addEventListener("click", rockChoice);
paperImage.addEventListener("click", paperChoice);
scissorsImage.addEventListener("click", scissorsChoice);


// const cpuScore = document.getElementById('computerScore')
// cpuScore.textContent = computerScore;
