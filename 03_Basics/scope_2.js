// nested scope


function one(){
    
    const username = "Chandan"

    function two(){

        const website = "youtube"
        console.log(username);

    }
    
    // console.log(website);    can't access
    two()

}

one()

console.log("addone : ",addOne(8));         // here also it wil give the same answer

function addOne(num){
    return num + 1
}
console.log("addone : ",addOne(8));


// console.log("addTwo : ",addTwo(6));         // here it will give error as along with function declaration we have holded the value

const addTwo = function(num){                // variables in JS are very powerful as they can hold function ,object etc here addTwo is a variable which is also called expression in this case
      return num + 2
}

console.log("addTwo : ",addTwo(6));