//problem 1
let str="tof\"";
console.log(str.length);
//problem 2
let name="tofazzol";
console.log(name.startsWith("to"));
console.log(name.endsWith("o"));
//problem 3
let friend="RAFI";
console.log(friend.toLowerCase());


//problem 4
let str2="please give me 1000 taka";
console.log(str2.slice("please give me ".length));

//problem 5
let str3="please give me 1000 taka";
console.log(str3.replace("1000","5000"));

//problem 6

let friend2="Monisha";
friend2[3]="a";
console.log(friend2);//Friend2 is not change because string is immutable in js. We can not change any character of a string by using index. We can only change the whole string by reassigning it.
