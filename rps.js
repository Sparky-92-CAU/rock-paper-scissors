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

 function userPlay(){

    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    
    
    
    rock.addEventListener("click",function (e)
     {
      let choice=e.target.id;
      alertChoice(choice);
    });
    
    paper.addEventListener("click",function (e) 
    {
      let choice=e.target.id;
      alertChoice(choice);
     
    });
    
    scissors.addEventListener("click", function (e) {
      let choice=e.target.id;
      alertChoice(choice);
     
    });
    };