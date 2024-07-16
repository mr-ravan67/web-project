let userScore=0;
let compScore=0;

const choice=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");


const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game was draw.play again!";
    msg.style.backgroundColor="orange";

};

const ShowWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userScore++;


        userScorePara.innerText=userScore;

        msg.innerText=`you Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lost. ${compchoice} beats your${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userchoice)=>{
    const compchoice=gencompchoice();
if (userchoice===compchoice){
    //game draw
    drawGame();
}else{
    let userWin=true;
    if(userchoice==="rock"){
        //scissors,paper
        userWin=compchoice==="paper"? false:true;
    }else if(userchoice==="paper"){
        //rock,scissors
        userWin=compchoice==="scissors"? false:true;
      } else{
        //rock,paper
        userWin=compchoice==="rock"? false:true;
     }
     ShowWinner(userWin,userchoice,compchoice);
}
};

choice.forEach((choice)=>{
       choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
        
    });
});
