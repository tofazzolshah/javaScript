// this is my practice file for loops in JavaScript
 
//problem 1
let mark={
    tofazzol: 90,
    mizan: 80,
    khadem: 85,
    liza: 95
}
for(let i in mark){
    console.log("The marks of "+i," is :" +mark[i]);
}
//problem 2
const mean= (a,b,c,d)=>{
    return (a+b+c+d)/4;
}
console.log("The mean of 4 numbers is :", mean(10,20,30,40));