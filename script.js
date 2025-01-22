function getComputerChoice(){
    let choice = Math.random();
    if (choice > 0 && choice < 0.33){
        return "rock";
    }
    else if (choice >= 0.33 && choice < 0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("rock, paper, or scissors?");
}

function playRound(humanChoice, computerChoice){
    const rock = new RegExp('rock', 'i');
    const paper = new RegExp('paper', 'i');
    const scissors = new RegExp('scissors', 'i');

    if(rock.test(humanChoice)){
        if(rock.test(computerChoice)){
            return 0;
        }
        else if (paper.test(computerChoice)){
            return 2;
        }
        else{
            return 1;
        }
    }
    else if(paper.test(humanChoice)){
        if(rock.test(computerChoice)){
            return 1;
        }
        else if (paper.test(computerChoice)){
            return 0;
        }
        else{
            return 2;
        }
    }
    else if(scissors.test(humanChoice)){
        if(rock.test(computerChoice)){
            return 2;
        }
        else if (paper.test(computerChoice)){
            return 1;
        }
        else{
            return 0;
        }
    }
    console.log("playRound() Failed");
}

function playGame(){
    let rounds = prompt("How many rounds should we play?");
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 0; i < rounds; i++){
        let humanSelection = getHumanChoice();
        console.log("Human Choice: " + humanSelection);

        let computerSelection = getComputerChoice();
        console.log("Computer Choice: " + computerSelection);

        let result = playRound(humanSelection, computerSelection);

        if (result == 0){
            console.log("It's a draw...");
        }
        else if(result == 1){
            humanScore++;
            console.log("Human wins the round!");
        }
        else if (result == 2){
            computerScore++;
            console.log("Computer wins the round!");
        }
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    if (humanScore > computerScore){
        console.log("Human wins the whole game!");
    }
    else if (humanScore < computerScore){
        console.log("Computer wins the whole game!");
    }
    else{
        console.log("No clear winner!");
    }
}

playGame();