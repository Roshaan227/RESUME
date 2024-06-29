 let userScore = 0;
let CompScore = 0;
  
  const choices = document.querySelectorAll(".choice");
  const msg = document.querySelector("#msg");
  const comp = document.querySelector("#comp");
  const user = document.querySelector("#user");

  
  choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
      
    playGame(userChoice);
    })
})

     const genCompChoice = ()=>{
        const options = ["rock","paper","scissors"];
        const randomIdx  =   Math.floor(Math.random()*3)
             return options[randomIdx]       
     }
        const drawGame = ()=>{
            
            msg.innerText = "Game is draw. Play again";
            msg.style.backgroundColor = "white"
            msg.style.color = "black"
             msg.style.fontSize = "3vw"
        }
    const showWinner = (userWin, userChoice , compChoice)=>{
        if(userWin){
            userScore++;
            user.innerText = userScore;
            msg.innerText = `You win your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "Green"
            msg.style.fontSize = "3vw"
        }else{
            CompScore++;
            comp.innerText = CompScore;              
            msg.innerText = `You lose ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "Red"
             msg.style.fontSize = "3vw"
        }
    }

   const playGame = (userChoice)=>{
         console.log("userChoice is", userChoice);
    const compChoice = genCompChoice();
    
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
if(userChoice === "rock"){
    userWin =   compChoice === "paper" ? false : true;
} else if(userChoice === "paper"){
    userWin =   compChoice === "scissors" ? false : true;
} else{
    userWin =   compChoice === "rock" ? false : true;
}
       showWinner(userWin, userChoice , compChoice);        
    }

   }



 

    
      