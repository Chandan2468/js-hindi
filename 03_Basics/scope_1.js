// {} - these are mainly the scope that comes in function , if-else , loops etc

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);    not defined error 
// console.log(b);    not defined error
console.log(c);       // gets run which is very problematic so we avoid var as well as declaring like c = 30


let a = 400
const b = 80
if(true){
    let a = 10
    const b = 20
    console.log("Inner a : ",a);
}
console.log("Outer a : ",a);
// const b = 90 Cannot redeclare block-scoped variable
// let a = 678  Cannot redeclare block-scoped variable
a = 90
// b = 900              cannot re-assign a clock-spaced constant variable
