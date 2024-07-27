let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const users=document.querySelector("#user-score");
const comps=document.querySelector("#comp-score");
const compchoice = ()=>{
    const option=["rock","paper", "scissors"];
     const idx =Math.floor(Math.random()*3);
     return option[idx];
}
const drawGame=()=>{
    msg.innerText="Game was Draw. Play again."
    msg.style.backgroundColor="#081b31";
}
const playGame = (userchoice) =>{
    const compc=compchoice();
     if(compc===userchoice){
        console.log("game draw");
        drawGame();
     }else{ 
        let userWin=true;
        if(userchoice==="rock"){
        userWin= compc==="paper" ? false : true;
     } else if(userchoice==="paper"){
        userWin= compc=== "scissors" ? false : true;
     }else{
        userWin= compc==="rock" ? false : true;
     }
    showWinner(userWin, userchoice,compc);
    }
}
const showWinner = (userWin, userchoice,compc)=>{
    if(userWin){
        userscore++;
        console.log("You win!")
        users.innerText=(userscore);
        msg.innerText=`You win! Your ${userchoice} beats ${compc}`;
        msg.style.backgroundColor="Green";
    }else{
        compscore++;
        console.log("You lose")
        comps.innerText=(compscore);
        msg.innerText=`You lose . ${compc} beats  your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
choices.forEach((choice) => {
  choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playGame(userchoice);
  })
});