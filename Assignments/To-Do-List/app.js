let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
 
list=document.querySelectorAll("li");
btn.addEventListener("click",function(){
    let child=document.createElement("li");
    child.textContent=input.value;
    let dltBtn=document.createElement("button");
    dltBtn.classList.add("delete");
    dltBtn.innerText="delete";
    child.appendChild(dltBtn);
    ul.appendChild(child);
    input.value="";
});


let ulItems=document.querySelector("ul");
ulItems.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON") {
        let deleteItem=event.target.parentElement;
        deleteItem.remove();
        console.log("item deleted");
    } 
});

// let dltBtns=document.querySelectorAll(".delete");
// for(dltB of dltBtns){
//     dltB.addEventListener("click", function(){
//         let parent=this.parentElement;
//         console.log(parent);
//         parent.remove();
//     });
// }

