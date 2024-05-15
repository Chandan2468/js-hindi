function sayName(){
    console.log("Chandan");
}


sayName()                        // sayName is reference to execut write sayName()

function addtwonumbers(num1,num2){
    console.log(num1+num2);
}

addtwonumbers()
addtwonumbers(4,8)
addtwonumbers(48,"48")             // problem
addtwonumbers(48,null)             // same problem


const result = addtwonumbers(4,8)  // here the function doesn't return anything
console.log("Result : ",result);   // so result is undefined


function addtwonumbers1(num1,num2){
    let result = num1+num2
    return result
}
const newresult = addtwonumbers1(4,8)  
console.log("NewResult : ",newresult);


function loginUserMessage(username){               // "",undefined are false statement in JS
    if(username == undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
const message = loginUserMessage("Chandan") 
console.log("message : ",message);

// console.log("message_withnoargs : ",loginUserMessage());   // undefined if value is not passed

function loginUserMessage1(username = "sam"){              // function with default value
    return `${username} just logged in`
}
console.log(loginUserMessage1())