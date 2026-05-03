console.log("this is conditional statement in JS");

//let a=prompt("Hey whats your age?");// it will ask you

//alert("You are old");// it will tell you
let a="45";

a=Number.parseInt(a);// it will convert string to number
console.log(a, typeof a);
let age=30;
if(age>0 && age<15){
    console.log("You are a kid");
}
else if(age>15 && age<=30){
    console.log("You are a young");
}
else{
    console.log("You are old");
}



