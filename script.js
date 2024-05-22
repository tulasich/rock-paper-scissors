console.log("Hello World")

function getComputerChoice() {
  let rps = Math.random();
  if(rps < 0.3){
      return "rock";
  }
  else if(rps < 0.7){
      return "paper";
  }
  else{
      return "scissors";
  }
}


function getHumanChoice() {
  let humanChoice = prompt("Choice")
  if(humanChoice.toLowerCase() !== "rock" && 
    humanChoice.toLowerCase() !== "paper" && 
    humanChoice.toLowerCase() !== "scissors"){
      console.log("invalid entry, try again");
      getHumanChoice();
  }
  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playGame(){

  function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
  }


  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());
  // playRound(getHumanChoice(), getComputerChoice());

  for(let i=5; i>0; i--){
    playRound(getHumanChoice(), getComputerChoice());
  }

  if(humanScore > computerScore){
    console.log("Woohoo! you win")
  } else if(computerScore > humanScore){
    console.log("computer won x")
  } else {
    console.log("You tied.")
  }

}

playGame();