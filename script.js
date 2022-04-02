
//randomly returns rock, paper, or scissors
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

/*Takes in a player selection and computer selection and plays a single round of r,p,s
*/

function playRound(playerSelection,compSelection){
    //make user input case insensitive
    let playerMove = playerSelection.toLowerCase();
    //store result message into vars
    let winMsg = `You Win! ${playerSelection} beats ${compSelection}`;
    let loseMsg = `You Lose! ${compSelection} beats ${playerSelection}`;

    //structure to compare moves
    if(playerMove == 'rock'){
       if(compSelection == 'rock'){
           alert('Draw');
           return 'Draw!';
       }
       else if(compSelection == 'paper'){
           alert(loseMsg);
           return loseMsg;
       }
       else{
           alert(winMsg);
           return winMsg;
       }
    }
    else if(playerMove == 'paper'){
        if(compSelection == 'paper'){
            alert('Draw');
            return 'Draw!';
        }
        else if(compSelection == 'rock'){
            alert(winMsg);
            return winMsg;
        }
        else{
            alert(loseMsg);
            return loseMsg;
        }

    }
    else if(playerMove == 'scissors'){

        if(compSelection == 'scissors'){
            alert('Draw');
            return 'Draw!';
        }
        else if(compSelection == 'rock'){
            alert(loseMsg);
            return loseMsg;
        }
        else{
            alert(winMsg);
            return winMsg;
        }

    }
    else{
        return "You did not enter an appropriate move!";
    }



}

function game(){
    let playerScore = 0;
    let compScore = 0;
    let playerSelection;
    let computerSelection; 
    let result;
    let winner;

    for(let i = 0; i < 5; i++) {

        playerSelection  = prompt("pick rock, paper, or scissors");
        computerSelection = computerPlay();
        result = playRound(playerSelection,computerSelection);
        
        if(result == `You Win! ${playerSelection} beats ${computerSelection}`) {
            playerScore+=1;
        }
        else if(result == `You Lose! ${computerSelection} beats ${playerSelection}`){
            compScore+=1;
        };
        console.log(result);
        console.log(`player: ${playerScore} | computer ${compScore}`);
       
    }
      if(playerScore>compScore){
          winner="Human";
      }
      else{
          winner="Computer";
      }
      console.log(`The winner is ${winner}`);
}


game();







