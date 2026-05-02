console.log("operator in JS");
//Arethmetic operators in JS
let a= 10;
let b= 20;
console.log("a+b :", a+b);
console.log("a-b :", a-b);
console.log("a*b :", a*b);
console.log("a/b :", a/b);
console.log("a%b :", a%b);
console.log("a**b :", a**b); // this is exponentiation operator in JS.
console.log("a++ :", a++); // this is post-increment operator in JS. It will return the value of a before incrementing it.
console.log("a =",a);
console.log("a-- :", a--); // this is post-decrement operator in JS. It will return the value of a before decrementing it.
console.log("a =",a);
console.log("++a :", ++a); // this is pre-increment operator in JS. It will return the value of a after incrementing it.
console.log("a =",a);
console.log("--a :", --a); 



//Assignment operators in JS
let assignment= 14;
assignment+=5//same as assignment= a+5;
console.log( assignment);

// comparison operators in JS
let comp1= 10;
let comp2= 20;
let comp3= "10";
console.log("comp1 == comp2 :", comp1 == comp2);
console.log("comp1 != comp2 :", comp1 != comp2);
console.log("comp1 > comp2 :", comp1 > comp2);
console.log("comp1 < comp2 :", comp1 < comp2);
console.log("comp1 >= comp2 :", comp1 >= comp2);
console.log("comp1 <= comp2 :", comp1 <= comp2);
console.log("comp1 === comp3 :", comp1 === comp3); // this is strict equality operator in JS. It will return true if both the value and the type are same.
console.log("comp1 !== comp3 :", comp1 !== comp3); // this is strict inequality operator in JS. It will return true if both the value and the type are not same.


//logical operators in JS
let x=5;
let y=10;
console.log("x>y && x==y:", x>y && x==y); // jodi 2 ta condition true hoy tahole true return korbe, na hole false return korbe.
console.log("x>0 || x==y:", x>0 || x==y); // jodi 1 ta condition true hoy tahole true return korbe, na hole false return korbe.
console.log(!false);
