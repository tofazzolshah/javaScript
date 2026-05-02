console.log("let, const and var in JS");
//var is the old way to declare a variable in JS. It is function scoped and can be re-declared and updated.
//let is the new way to declare a variable in JS. It is block scoped and can be updated but not re-declared.
//const is the new way to declare a constant in JS. It is block scoped and cannot be updated or re-declared.
const name= "kutub";
//name= "tofazol"; // This will throw an error because name is a constant variable.
console.log(name);
let a=23;
let b="Tofazzol";
let c= null;
let d= undefined;
let e= true;
let f= false;

{
    let b="this";
    console.log(b);
}
console.log(b);