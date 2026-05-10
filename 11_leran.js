// This is function in javascript
function AvgOfTwoNumbers(num1, num2){
    console.log("Done!");
    return (num1 + num2) / 2;
    
}
// math.round() is used to round the number to the nearest integer
let a=10;
let b=20;
let c=30;

console.log("Average of a and b is :", AvgOfTwoNumbers(a,b));
console.log("Average of b and c is :", AvgOfTwoNumbers(b,c));
console.log("Average of c and a is :",AvgOfTwoNumbers(c,a));

//this is called arrow function in javascript
const sum= (p,q)=>{
    return p+q;
}
console.log("Sum is :", sum(15,8));
