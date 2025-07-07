// let smallImage = document.getElementsByClassName("oldImage");
// let x=1;
// for (let i of smallImage) {
//     i.src = "/Web_Development/JavaScript/Spider_Man/Web_of_Spider-Man_Vol_1_129-1.png";
//   console.log(`value of image ${x++} changed.`);
// }


// console.dir(document.querySelectorAll(".oldImage"));
// console.dir(document.querySelector("div a"));

let links=document.querySelectorAll(".box a");

for(let i=0; i<links.length; i++){
    links[i].style.color="purple";
}

let btn=document.createElement("button");
btn.innerText="click Me!";
let box=document.querySelector(".box");
box.appendChild(btn);

