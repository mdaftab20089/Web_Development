let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h3=document.querySelector("h3");

let btns=["first","second","third","fourth"];
document.addEventListener("keypress" , function(){
    if(started==false){
    console.log("game started");
    started=true;
    levelUp();
    }
});


function GameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    },200);
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText="level"+" "+level;

    // flash the random button.
    let ranIdx=Math.floor(Math.random()*3);
    let randColor=btns[ranIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(ranIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    GameFlash(randBtn);
}

function checkAns(idx){
    console.log(level);
    // let idx=level-1;
    if(gameSeq[idx]==userSeq[idx]){
        if(userSeq.length==gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
        h3.innerText="Game Over Your Score is : "+level +" press any key to again start the game";
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white";
        },200);
        reset();
    }
}
function btnPressed(){
    let pressBtn=this;
    console.log(pressBtn);
    userFlash(pressBtn);

    userColr=pressBtn.getAttribute("id");
    userSeq.push(userColr);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnPressed);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}