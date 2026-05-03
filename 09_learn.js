// this is my loop file for js
/*
for(let i=0;i<5;i++){
    console.log(i);
}
*/
// find the sum of first n natural numbers
let n=5;
let sum=0;
for (let i=0;i<=n;i++){
    sum=i+sum;

}
console.log(sum);


let obj={
    Tofazzol : 45,
    Mizan : 40,
    Rafi : 50,
    Sifat : 35
}
for(let a in obj){
    console.log("the mark of "+a+" is :"+obj[a]);
}
