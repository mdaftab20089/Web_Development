// let p=document.createElement("p");
// p.innerHTML="Hey I am Red";
// p.style.color="red";
// let body=document.querySelector("body");
// body.appendChild(p);

// let h3=document.createElement("h3");
// h3.innerHTML="Hey I am Blue h3";
// h3.style.color="blue";
// body.appendChild(h3);

// let div=document.createElement("div");
// div.style.backgroundColor="pink";
// div.style.border="2px solid black";
// body.appendChild(div);

// h1=document.createElement("h1");
// h1.innerHTML="heyy i am div";
// div.append(h1);

// p1=document.createElement("p");
// p1.innerHTML="Me Too!!";
// div.append(p1);

// div.style.padding="1rem";


/*
Practice Questions 
Qsl. Create a new input and button element on the page using JavaScript only. Set the  
text of button to "Click me' 
Qs2. Add following attributes to the element : 
Change placeholder value of input to "username" 
Change the id of button to "btn' 
Qs3. Access the btn using the querySelector and button id. Change the button background 
color to blue and text color to white. 
Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. 
Change its color to purple. 
Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice", 
where Delta is bold. 
*/

let btn=document.createElement("button");
let input=document.createElement("input");
btn.innerHTML="<b>Click Me!!</b>";
let body=document.querySelector("body");
body.appendChild(btn);
body.appendChild(input);
btn.setAttribute("id","butn");
input.setAttribute("placeholder","Username");
btn.classList.add("bw");
let h1=document.createElement("h1");
h1.innerHTML="DOM Practice";
h1.classList.add("h1style");
body.appendChild(h1);
