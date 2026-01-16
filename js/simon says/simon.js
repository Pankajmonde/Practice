let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
if(started==false){
    console.log("game is started");
    started=true;
    levelUp();
}
});

function gameFlash(btn){
    btn.classList.add("flash");  
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);

}
function userFlash(btn){
    btn.classList.add("userflash");  
    setTimeout(function(){
        btn.classList.remove("userflash");

    },250);

}


function levelUp(){
    userSeq =[];
    level++
    h2.innerText=`level ${level}`;
    //   random buttton
    let randInd=Math.floor(Math.random()*3);
    let randomcolor=btns[randInd];
    let randombtn=document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);
    console.log(gameSeq);
    gameFlash(randombtn);
}

function cheAns(idx)
{
   
 
    if(userSeq[idx]===gameSeq[idx]){
 
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
       } 
    }else {
        h2.innerHTML=`Game over! <br> your score was ${ level} </br> <br> Press any key to start `;
        document.querySelector("body").style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor='white';
        },150)
        reset();
    }
}

function btnpress(){
    console.log(this); 
    let btn=this ; 
      userFlash(btn);
      userColor=btn.getAttribute("id");
      userSeq.push(userColor);
      
  cheAns(userSeq.length-1);
}
    let allBtns=document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnpress);
    }

    function reset(){
        started=false;
        gameSeq=[];
        userSeq=[];
        level = 0;
    }