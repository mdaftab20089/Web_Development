let button1=document.querySelector(".button1");
button1.addEventListener("click",function(event){
    console.log(event);
    console.log("Button was Clicked")
});

let button2=document.querySelector(".button2");
button2.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("Button was Double Clicked")
});

let inp=document.querySelector("input");
inp.addEventListener("k",function(){
    console.log("key pressed !");
})