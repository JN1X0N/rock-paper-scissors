const options = ["rock", "paper", "scissors"];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function userPlay() {
    let input = "";
    while (input = prompt("select one of the following: rock, paper or scissors: ").toLowerCase(), !options.includes(input)) {
        console.log("invalid choice");
    }
    return input;
}

function win(user, comp) {
    if ((user == options[0] && comp == options[2]) ||
        (user == options[1] && comp == options[0]) ||
        (user == options[2] && comp == options[1])) {
        return true;
    } else {
        return false;
    }
}

function playRound() {
    let computerChoice = computerPlay();
    let userChoice = userPlay();

    if (userChoice == computerChoice) {
        console.log("Draw!");
        return 0
    } else if (win(userChoice, computerChoice)) {
        console.log(`You win! ${userChoice} beats ${computerChoice}`);
        return 1;
    } else {
        console.log(`You lose! ${computerChoice} beats ${userChoice}`);
        return -1;
    }
}

function game() {
    let userWins = 0;
    let compWins = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result == 1) {
            userWins++;
        } else if (result == -1) {
            compWins++;
        }
    }
    if (userWins > compWins) {
        console.log(`You win with ${userWins} win${userWins != 1 ? "s" : ''} to the computers ${compWins} win${compWins != 1 ? "s" : ''}!`);
    } else if (userWins < compWins) {
        console.log(`The computer wins with ${compWins} win${compWins != 1 ? "s" : ''} to your ${userWins} win${userWins != 1 ? "s" : ''}!`);
    } else {
        console.log(`You and the computer draw with ${userWins} win${userWins != 1 ? "s" : ''} each!`)
    }
}

game();