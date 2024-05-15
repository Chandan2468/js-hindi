function calculateCartPrice(num1){     // function should be readable
    return num1
}
console.log(calculateCartPrice(48));
console.log(calculateCartPrice(200,400,600,800));    // returns only the first price


// so use rest operator
function calculateCartPrice1(...num1){   // returns an array
  return num1
}
console.log(calculateCartPrice1(200,400,600,800));    

function calculateCartPrice2(val1,val3,...num1){   
  return num1
}
console.log(calculateCartPrice2(200,400,600,800));


console.log("Passing objects in function");

const user ={
  username:"chandan",
  price:999
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)               // should pass an object and we also have to make sure about typesfaety i.e whether anyobject.price is present or not in typescript typechecking is done automatically
handleObject({                   // passing object directly
  username:"chandan",
  age:22
})

const myArr = [100,200,300,400]
function returnSecondValue(getArray){
  return getArray[1]
}
console.log(returnSecondValue(myArr));
