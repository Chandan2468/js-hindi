// Primitive Data type - call by value i.e. given by copying the value
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// typeof for BigInt is undefined and for null it is object and symbol is symbol

// Reference(Non Primitive) Data typa - call by reference
// Array, Objects, functions ( all give answer of typeof as object and for function its object function


// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 234354358246846828n

const hero = ["batman" , "spiderman" , "superman" , "ben10"]

let myObj = {
    name : "Chandan",
    age : 22
}


const myFunction = function(){
    console.log("Hello World");
}

// Memory are of two types :
// Stack memory is used with primitive data type , Heap memory is used with non primitive data type


let user1 = {
    email : "user1@gmail.com",
    upi : "user1@tylp"
}

let user2 = user1
user2.email = "user2@gmail.com"  // here value of user1 will also change because in non-primitive data type entire reference to heap memory is passed

console.log(user1);

