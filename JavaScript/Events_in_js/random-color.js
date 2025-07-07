let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let color=getRandomColor();
    let h1=document.querySelector("h1");
    h1.innerText=color;
    let inDiv=document.querySelector(".inner-box");
    inDiv.style.backgroundColor=color;
    console.log("color Updated");
});

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let Blue=Math.floor(Math.random()*255);
    // let color=`rgb(${red} ${green} ${Blue})`;
    return (`rgb(${red} ${green} ${Blue})`);
}

btn.onclick=changeColor;
function changeColor(){
    btn.style.backgroundColor=getRandomColor();
    let color=getRandomColor();
    console.log(`color changed to ${color}`);
}



