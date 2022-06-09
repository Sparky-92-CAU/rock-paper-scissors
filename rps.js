//get DOM references, initialize global variables
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerChoiceContainer = document.querySelector(".playerSelection");
const computerChoiceContainer = document.querySelector(".computerSelection");
const playerScoreContainer = document.querySelector(".playerScore");
const computerScoreContainer = document.querySelector(".computerScore");
const tieContainer = document.querySelector(".tie");
const playerScore = document.createElement("h1");
const computerScore = document.createElement("h1");
const tie = document.createElement("h1");
const playerChoice = document.createElement("h2");
const computerChoice = document.createElement('h2');
const winAlertContainer = document.querySelector(".win");
const loseAlertContainer = document.querySelector(".lose");
const winAlert = document.createElement('h1');
const loseAlert = document.createElement('h1');
winAlert.textContent="You Win!";
loseAlert.textContent="You Lose!";
playerChoice.textContent = "";
computerChoice.textContent = "";
playerScore.classList.add('score');
computerScore.classList.add('score');
tie.classList.add('score');
playerScore.textContent = 0;
computerScore.textContent = 0;
tie.textContent = 0;
playerScoreContainer.appendChild(playerScore);
computerScoreContainer.appendChild(computerScore);
tieContainer.appendChild(tie);
playerChoiceContainer.appendChild(playerChoice);
computerChoiceContainer.appendChild(computerChoice);
var win = new Audio('../rock-paper-scissors/assets/win.mp3');
var lose = new Audio('../rock-paper-scissors/assets/lose.mp3');



/**alert alert-danger
alert alert-success**/


//event listeners that call gamePlay when button clicked
rock.addEventListener("click",function (e)
   {
    let choice=e.target.id;
    console.log(choice);
    gamePlay(choice);
    checkGame();
    
  });
//paper event listenr
  paper.addEventListener("click",function (e)
  {
   let choice=e.target.id;
   console.log(choice);
   gamePlay(choice);
   checkGame();
   
 });
//rock event listern
 scissors.addEventListener("click",function (e)
   {
    let choice=e.target.id;
    console.log(choice);
    gamePlay(choice);
    checkGame();
    
  });


//function to drive gameplay
  function gamePlay(userSelection){

    let compSelection = computerPlay();
    let winner= compareMoves(compSelection,userSelection);
    playerChoice.textContent = userSelection;
    computerChoice.textContent=compSelection;
    
    
    if(winner=="player"){
        playerScore.textContent++;
        
    }
    else if(winner=="computer"){
        computerScore.textContent++;
    }
    else{tie.textContent++;};
    
    
    

  };




//returns a random selection(rock, paper, or scissors) for computer
function computerPlay(){
    
    
    let move = Math.floor(Math.random() * 3) + 1;
  
    if(move==3){
        return "rock";
    }
    else if(move==2){
        return "paper";
    }
    else{
        return "scissors";
    }
  }


// takes in to selections and returns winner
function compareMoves(compSelection,playerSelection)
  
{



//structure to compare moves
if(playerSelection == 'rock'){
   if(compSelection == 'rock'){
       
       return 'draw';
   }
   else if(compSelection == 'paper'){
       
       return 'computer';
   }
   else{
       
       return 'player';
   }
}
else if(playerSelection == 'paper'){
    if(compSelection == 'paper'){
        
        return 'draw';
    }
    else if(compSelection == 'rock'){
        
        return 'player';
    }
    else{
        
        return 'computer';
    }

}
else if(playerSelection == 'scissors'){

    if(compSelection == 'scissors'){
        
        return 'draw';
    }
    else if(compSelection == 'rock'){
        
        return 'computer';
    }
    else{
        
        return 'player';
    }

}

}


function checkGame(){

    if(playerScore.textContent==5 || computerScore.textContent == 5){
        if(playerScore.textContent==5){
            winAlert.textContent="You Win!";
            winAlert.classList.add("alert");
            winAlert.classList.add("alert-success");
            winAlert.classList.add("justify-content-lg-center");
            winAlertContainer.appendChild(winAlert);
            win.play();
            playerScore.textContent=0;
            computerScore.textContent=0;
            tie.textContent=0;
            
        }
        else{
            loseAlert.textContent="You Lose!";
            loseAlert.classList.add("alert");
            loseAlert.classList.add("alert-danger");
            loseAlert.classList.add("justify-content-lg-center");
            loseAlertContainer.appendChild(loseAlert);
            lose.play();
            playerScore.textContent=0;
            computerScore.textContent=0;
            tie.textContent=0;
        }
    };
    if((playerScore.textContent==1 && computerScore.textContent == 0 && tie.textContent == 0)|| 
        (playerScore.textContent==0 && computerScore.textContent == 1 && tie.textContent == 0) || 
        (playerScore.textContent==0 && computerScore.textContent == 0 && tie.textContent == 1)){
         
            winAlert.classList.remove("alert");
            winAlert.classList.remove("alert-success");
            winAlert.textContent="";
            loseAlert.textContent="";
            loseAlert.classList.remove("alert");
            loseAlert.classList.remove("alert-danger");
        }

}