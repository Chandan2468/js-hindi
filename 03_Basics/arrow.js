const username = "malay"


const user ={
    username:"chandan",
    price:90,

    welcomeMessage: function(){
        console.log(`thisusername : ${this.username} , Welcome to our course`);   // here this refers to the current context
        console.log(`username : ${username} , Welcome to our course`);  
        console.log("Inner this : ",this);                                        // this points to the current object
    }

}

console.log(user.welcomeMessage());
console.log("Outer this : ",this);         // if we run this command in concole we will get window object because in earlier days JS code is run by the engine which is only present in browser and their window is the global object
// if we print the above line in Node.js then it will show {} as their is no global object


function val(){
    // let username = "chandan"            // can't use this with the outer function
    // console.log(this.username);
}

console.log("Arrow function : ");

const chai = () => {
    let username = "chandan"
    console.log(this);
}
chai()

// arrow function () => { }
const addTwo = (num1,num2) => {           // with explicit return
    return num1 + num2
}
console.log("addTwo : ",addTwo(48,48));

console.log(" Arrow function with implicit return ");

const addThree = (num) => ( num + 3 )     // here we assume that we get a value with {} we need to write return and with () we don't

console.log("addThree : ",addThree(3));

// return an object

const retObj = (num) => ( {username : "chandan"} )

console.log("retobj : ",retObj(8));