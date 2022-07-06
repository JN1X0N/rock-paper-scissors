const options = ["rock", "paper", "scissors"];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function check(user, comp) {
    if ((user == options[0] && comp == options[2]) ||
        (user == options[1] && comp == options[0]) ||
        (user == options[2] && comp == options[1])) {
        return true;
    } else {
        return false;
    }
}

function clearElements(winner) {
    document.querySelector(".buttons").remove();
    document.querySelector(".round-results").remove();
    let result = document.createElement("p");
    result.textContent = `the ${winner} wins!`;
    result.style.fontSize = "60px";
    const body = document.querySelector("body");
    body.appendChild(result);
}

function playRound(choice) {
    let computerChoice = computerPlay();
    let userChoice = choice;

    const gameResults = document.querySelector(".game-results p");
    let scores = gameResults.textContent.split(" - ");
    const roundResults = document.querySelector(".round-results p")

    if (userChoice == computerChoice) {
        roundResults.textContent = "It was a draw!";
        return;
    } else if (check(userChoice, computerChoice)) {
        roundResults.textContent = `You win! ${userChoice} beats ${computerChoice}`;
        scores[0] = parseInt(scores[0])+1;
    } else {
        roundResults.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
        scores[1] = parseInt(scores[1])+1;
    }

    if (scores[0] == 5) {
        clearElements("player");
    } else if (scores[1] == 5) {
        clearElements("computer");
    }
    
    gameResults.textContent = scores.join(" - ");
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(each => each.addEventListener("click", () => {
    playRound(each.value);
}));





// function game() {
//     let userWins = 0;
//     let compWins = 0;
//     for (let i = 0; i < 5; i++) {
//         let result = playRound();
//         if (result == 1) {
//             userWins++;
//         } else if (result == -1) {
//             compWins++;
//         }
//     }
//     if (userWins > compWins) {
//         console.log(`You win with ${userWins} win${userWins != 1 ? "s" : ''} to the computers ${compWins} win${compWins != 1 ? "s" : ''}!`);
//     } else if (userWins < compWins) {
//         console.log(`The computer wins with ${compWins} win${compWins != 1 ? "s" : ''} to your ${userWins} win${userWins != 1 ? "s" : ''}!`);
//     } else {
//         console.log(`You and the computer draw with ${userWins} win${userWins != 1 ? "s" : ''} each!`)
//     }
// }

// game();