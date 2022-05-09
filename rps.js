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
  
  
  //when one is clicked, call compare() to determine winner
  rock.addEventListener("click",function (e)
   {
    let choice=e.target.id;
    console.log(compareMoves(computerPlay(),choice));
    
  });
  
  paper.addEventListener("click",function (e) 
  {
    let choice=e.target.id;
    console.log(compareMoves(computerPlay(),choice));
    
   
  });
  
  scissors.addEventListener("click", function (e) {
    let choice=e.target.id;
    console.log(compareMoves(computerPlay(),choice));
    
   
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


userPlay();


 