console.log("Hello World");

const scoreboard = document.querySelector("#scoreboard");

let humanChoice = null;
let computerChoice = null;
let humanScore = 0;
let computerScore = 0;

//Elements to display human & computer Score dynamically
const hscore = document.createElement("div"); 
const cscore = document.createElement("div"); 

document.body.appendChild(hscore);
document.body.appendChild(cscore);

// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll("button");
  options.forEach((button) => {
    button.addEventListener("click", () => {
      humanChoice = button.id;
      computerChoice = getComputerChoice();
      playGame(humanChoice, computerChoice);
    });
  });
});

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

function playGame(humanChoice, computerChoice){
  scoreboard.style.cssText = "padding: 10px; background-color: lightpink; margin-top: 10px;"
  hscore.style.cssText = "background: lightblue; padding: 10px;";
  cscore.style.cssText = "background: yellow; padding: 10px;";

  playRound(humanChoice, computerChoice);

  function playRound(humanChoice, computerChoice) {
  
    let resultMessage = "";
  
    if (humanChoice === computerChoice) {
      resultMessage = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
      resultMessage = `Computer wins! ${computerChoice} beats ${humanChoice}`;
      computerScore++;
    }
    
    //Display human & computer scores after every round
    hscore.textContent = `Human Score: ${humanScore}`;
    cscore.textContent = `Computer Score: ${computerScore}`; 
    
    scoreboard.textContent = resultMessage;
  
    if(humanScore === 5 || computerScore === 5)
      declareWin();
  }
}  

function declareWin(){
  //Div element to show winning message
  const winbox = document.createElement("div");
  document.body.appendChild(winbox);
  winbox.style.cssText = "background: green; padding: 10px;";

  let winMessage = "";

  if(humanScore === 5){
    winMessage = "Awexome!, you won wooohoo, new game?";
  } 
  else if(computerScore === 5){
    winMessage = "excellent, computer won x, new game?";
  } else{
    winMessage = "somethings wrong, refresh"
  }

  winbox.textContent = winMessage;

  humanScore = 0;
  computerScore = 0;
  
  // Clear winbox content when starting a new game
  const options = document.querySelectorAll("button");
  options.forEach((button) => {
    button.addEventListener("click", () => {
      winbox.textContent = "";
      winbox.style.cssText = "";
    });
  });
}