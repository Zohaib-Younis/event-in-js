//Event handling in js
//high priority of JS code means if a inline event applyed and js even epplyed then js event will be execute

let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);
};

let contentBox=document.querySelector("#contentBox");
contentBox.onmouseover=()=>{
    console.log("Your mouse in  on div box");

}