        // this is the Javascript code to run a game of Rock/Paper/Scissors without using HTML and CSS
        let roundNumber = 0;
        let playerScore = 0;
        let playerSelection = "";
        let computerScore = 0;
        let computerSelection = "";
        let tie = 0;
        let gameendmessage = ``;
        let res = "";
        function gameEnd(){
            if (playerScore > computerScore){
                gameendmessage = `Congratulations, you win! \nResuts: W-${playerScore} L-${computerScore}`
            } else 
                gameendmessage = `You lose. \nResuts: W-${playerScore} L-${computerScore}`

        }
        
        // play a full game
        function game() {

            // this will change all the scores back to their starting values
            let roundNumber = 0;
            let playerScore = 0;
            let playerSelection = "";
            let computerScore = 0;
            let computerSelection = "";
            let tie = 0;
            let gameendmessage = ``;
            let res = "";

            // start game - this does a loop of the for statement 5 times, after it will move onto the last lines of code

            for (let i = 0; i < 5; i++) {
                computerSelection = computerPlay();
                playerSelection = playerPlay();;
                res = playRound(computerSelection, playerSelection);
                if (res[4] == "w"){
                    playerScore++;
                } else if (res[4] == "l"){
                    computerScore++;
                } else {
                    tie++;
                }
                console.log(res);
            }
            if (playerScore > computerScore){
                gameendmessage = `Congratulations, you win! \nResuts: W-${playerScore} L-${computerScore} T-${tie}`
            } else if (computerScore > playerScore){
                gameendmessage = `You lose. \nResuts: W-${playerScore} L-${computerScore} T-${tie}` 
            } else {
                gameendmessage = `It's a tie \nResuts: W-${playerScore} L-${computerScore} T-${tie}` 
            }
            console.log(gameendmessage);
        }
        
        // randomly pick rock, paper or scissors
        function computerPlay() {
        computerSelection = Math.floor(Math.random() * 3 + 1);
        switch(computerSelection) {
        case 1 :
                computerSelection = "Rock";
                break;
            case 2 :
                computerSelection = "Paper";
                break;
            case 3 :
                computerSelection = "Scissors";
                break;
        }
        return computerSelection;
        }
        
        // prompt the player for a choice by opening a box where the user can input text


        function playerPlay() {
        let str = prompt("Pick ROCK/PAPER/SCISSORS: ");
        let lowerText = str.toLowerCase();
        let capText = lowerText.charAt(0).toUpperCase() + lowerText.slice(1);
        
        if (capText === "Rock" || capText === "Paper" || capText ===  "Scissors") {
            playerSelection = capText;
            return playerSelection;
        } else if (capText === "Paper") {
            playerSelection = capText;
            return playerSelection;
        } else if (capText === "Scissors") {
            playerSelection = capText;
            return playerSelection;
        } else {
            alert("Pick 'Rock', 'Paper', or 'Scissors'.");
            playerPlay();
        }
        
        }
        
        // compare and log a Message
        function playRound(computerSelection, playerSelection) {
            let com = "";
            roundNumber++;
            
            if (computerSelection == playerSelection){
                com = "Tie!";
    
            }
            else if (computerSelection == "Rock" && playerSelection == "Scissors"){
                com = "You lose! Rock beats scissors.";
                computerScore++;
            }
            else if (computerSelection == "Rock" && playerSelection == "Paper"){
                com = "You win! Paper covers rock.";
                playerScore++;
            }
            else if (computerSelection == "Paper" && playerSelection == "Rock"){
                com = "You lose! Paper covers rock.";
                computerScore++;
            }
            else if (computerSelection == "Paper" && playerSelection == "Scissors"){
                com = "You win! Scissors beats paper.";
                playerScore++;
            }
            else if (computerSelection == "Scissors" && playerSelection == "Rock"){
                com = "You win! Rock beats scissors.";
                playerScore++;
            }
            else if (computerSelection == "Scissors" && playerSelection == "Paper"){
                com = "You lose! Scissors beats paper.";
                computerScore++;
            }
            return com;
        }
        const buttons = document.querySelectorAll('button');

        buttons.forEach((button) =>{
            button.addEventListener('click', function (e) {
                
                
                
                playerSelection = `${e.target.id}`;
                computerSelection = computerPlay();
                com = playRound(computerSelection, playerSelection)

                const bodySelect = document.querySelector('body');
                const content = document.createElement('div');
                content.textContent = com;

                bodySelect.appendChild(content);

                const headerSelect = document.querySelector('h2');
                headerSelect.textContent = `score: ${playerScore} - ${computerScore} `;
                
                if (playerScore == 5 || computerScore == 5){
                    gameEnd();
                    alert(gameendmessage);
                }

                console.log(playerSelection)
                console.log(computerSelection)
                console.log(com);
                console.log(playerScore)
                console.log(roundNumber)
            })
            })