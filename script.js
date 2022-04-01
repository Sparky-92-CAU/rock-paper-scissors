
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
           return 'Draw!';
       }
       else if(compSelection == 'paper'){
           return loseMsg;
       }
       else{
           return winMsg;
       }
    }
    else if(playerMove == 'paper'){
        if(compSelection == 'paper'){
            return 'Draw!';
        }
        else if(compSelection == 'rock'){
            return winMsg;
        }
        else{
            return loseMsg;
        }

    }
    else if(playerMove == 'scissors'){

        if(compSelection == 'scissors'){
            return 'Draw!';
        }
        else if(compSelection == 'rock'){
            return loseMsg;
        }
        else{
            return winMsg;
        }

    }
    else{
        return "You did not enter an appropriate move!";
    }



}

const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);







