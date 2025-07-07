let form=document.querySelector("form");
form.addEventListener("submit",function(event){
     event.preventDefault();
    // console.log("form submitted");
    // let inp=document.querySelector("#email");
    // let pass=document.querySelector("#pass")
    // console.log(inp.value);
    // console.log(pass.value);
    console.dir(form);
    let mail=this.elements[0];
    let pass=this.elements[1];
    console.log(mail.value);
    console.log(pass.value);
    
});

