

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








