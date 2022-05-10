//get DOM reference for buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let result;

//event listeners that call gamePlay when button clicked
rock.addEventListener("click",function (e)
   {
    let choice=e.target.id;
    gamePlay(choice);
    
  });

  paper.addEventListener("click",function (e)
  {
   let choice=e.target.id;
   gamePlay(choice);
   
 });

 scissors.addEventListener("click",function (e)
   {
    let choice=e.target.id;
    gamePlay(choice);
    
  });

  function gamePlay(userSelection){

    console.log(computerPlay());
    console.log(userSelection);

  }



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