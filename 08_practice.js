// this is my practice file for js

//1
/*
let age=prompt("what is your age?");
if(age>10 && age<=20){
    console.log("you are in the range")
}
else{
    console.log("you are not in the range")
}
    */
//2
// let age=prompt("what is your age?");

// switch(age){
//     case "12":
//         console.log("you are 12 years old");
//         break;
//          case "30":
//         console.log("you are 30 years old");
//          break;               
//          case "45":
//         console.log("you are 45 years old");
//          break;       
//         default:
//         console.log("your age is not spatial");

// }
//3
let b=12;
if(b%2==0 && b%3==0){
    console.log("the number is divisible by 2 and 3");
}
else {
    console.log("the number is not divisible by 2 and 3");
}
//4
let c=9;
if(c%2==0 || c%3==0){
    console.log("the number is divisible by 2 or 3");
}
else {
    console.log("the number is not divisible by 2 or 3");
}
//5
let age=19;
let a=age>18? "You can drive" :"You cannot drive"; // this is called ternary operator
console.log(a);