//Event object
//It has spacial object that has detailed about the event
//All event handelers have access to the Event object's property and methods
 let mybutton=document.querySelector("#mybutton");
 mybutton.onclick=(e)=>{
    console.log(e)
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
    
 };
