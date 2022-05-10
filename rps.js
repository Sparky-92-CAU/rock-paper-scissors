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


//listens for a user to select a button to make a move
function userPlay(){
  
  //get DOM reference for buttons
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");
  let result;
  
  //when one is clicked, call compare() to determine winner
  rock.addEventListener("click",function (e)
   {
    let choice=e.target.id;
    let result =(compareMoves(computerPlay(),choice));
    scoreKeeper(result);
    
  });
  
  paper.addEventListener("click",function (e) 
  {
    let choice=e.target.id;
    let result =(compareMoves(computerPlay(),choice));
    scoreKeeper(result);
    
   
  });
  
  scissors.addEventListener("click", function (e) {
    let choice=e.target.id;
    let result = (compareMoves(computerPlay(),choice));
    scoreKeeper(result);
    
   
  });
  
};

function compareMoves(compSelection,playerSelection)
  
{



//structure to compare moves
if(playerSelection == 'rock'){
   if(compSelection == 'rock'){
       
       return 'draw';
   }
   else if(compSelection == 'paper'){
       
       return 'lose';
   }
   else{
       
       return 'win';
   }
}
else if(playerSelection == 'paper'){
    if(compSelection == 'paper'){
        
        return 'draw';
    }
    else if(compSelection == 'rock'){
        
        return 'win';
    }
    else{
        
        return 'lose';
    }

}
else if(playerSelection == 'scissors'){

    if(compSelection == 'scissors'){
        
        return 'draw';
    }
    else if(compSelection == 'rock'){
        
        return 'lose';
    }
    else{
        
        return 'win';
    }

}

}

function scoreKeeper(result){
  //need to add node right after cooressponding header for who won 
  const playerScoreContainer = document.querySelector(".playerScore");
  const playerScore = document.createElement("div");
  playerScore.textContent = 0;
  playerScoreContainer.appendChild(playerScore);

  if (result=="win"){
       console.log("player");
     
  }
  else if(result=="lose"){
       console.log("computer");
  }
  else{
       console.log("draw");
  }
 
}

 
 userPlay();




 