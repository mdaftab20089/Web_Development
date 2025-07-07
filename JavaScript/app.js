// day of the week
 /* day=1;
switch(day){
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');    
        break;
    case 3:
        console.log('wed'); 
        break;   
    case 4:
        console.log("thurs");
        break;
    case 5:
        console.log('friday'); 
        break;   
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');  
        break;          
}    */

        // alert("something is wrong");
        // let name1=prompt("enter your name");
        // console.log(name1);
     
    // let str="ilovecoding";
    // console.log(str.indexOf("love"));
    // console.log(str.indexOf('c'));
    //  let msg="help!";
    //  msg=msg.trim();
    //  msg=msg.toUpperCase()
    //  console.log(msg);

    // array examples.
    /*let arr=[];
    arr[0]=1;
    arr[1]=10;
    arr[5]=25;
    console.log(arr);
    console.log(arr.length); */

    /* let arr=[];
    arr.push(5);
    arr.unshift(10);
    console.log(arr);
    let x=arr.pop()
    console.log(x);
    let y=arr.shift();
    console.log(y);
    console.log(arr); */

//     const arr = [
//   ['', '', ''],
//   ['', '', ''],
//   ['', '', '']
// ];

// arr[0][0] = 'X';
// arr[1][1] = 'X';
// arr[2][2] = 'X';
// arr[0][2] = '0';
// arr[2][0] = '0';

// console.log(arr);

// let student={
//     name: "aftab",
//     roll:17,
//     age: 23,
//     address:"islam nagar Araria Ward No 27"
// };

// const thread1={
//     username: "aftab",
//     content: "movies",
//     likes : 10000,
//     repost : 26,
//     tags :["indian" , "comedy", "anime","enter"]
// };

    // const std={
    //     name:"aftab",
    //     age:23,
    //     marks:84.6,
    //     city:"araria"
    // }
    // std.name="rahi";
    // std.city="Bihar";
    // std["Gender"]="female";
     

//     function poem() {
//     console.log("On the day the world ends A bee circles a clover, A fisherman mends a glimmering net.Happy porpoises jump in the sea, By the rainspout young sparrows are playing And the snake is gold-skinned as it should always be.");
//    }

    //   function dice(){
    //     let no=Math.floor(Math.random()*5)+1;
    //     return no;
    //   }
    //   console.log(dice());

    // let greet="hello";
    // function changeGreet(){
    //     let greet="namaste";
    //     console.log(greet);
    //     function inner(){
    //         console.log(greet);
    //     }
    // }
    // console.log(greet);
    // changeGreet();
    

    /* 
    function expression and Higher Order Function.
    */
     
    var aftab=function(x,y){
         return (x*y)%(x+y);
    }
    //console.log(aftab(4,8));
    function another(func,n){
        for (let i=1; i<n; i++){
            func();
        }
    }
    let func=function(){
         console.log("Aysha Masoom");
    }
    // another(func,5);

    // building a basic calculator.
    const calculator={
          add:function(a,b){
            return a+b;
          },
          sub: function(a,b){
            return a-b;
          },
          product: function(a,b){
            return a*b;
          }
    }
    console.log(calculator);

    
