const myArr = [0,1,2,3,4,5,true,'chandan'] // arrays in JS are resizable
// deep copy of an array object is a copy whose properties do not share the same reference

const myArr2 = new Array(1,2,3,4)

// Array Methods

myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);


myArr.unshift(9)       // add 9 at begin but a time taking process if number of elements are large
myArr.shift()          // removes the first element


console.log("includes : ",myArr.includes(9));
console.log("index : ",myArr.indexOf(100));

console.log("join");
const newArr = myArr.join()   // binds the old array and converts into a string
console.log(newArr);
console.log(myArr);
console.log(typeof newArr);


console.log("Slice and Splice");
console.log("A ",myArr);
// slice returns a section of array but it doen't change our original array and it's last range is exclusive
const myn1 = myArr.slice(1,4)
console.log("Slice : ",myn1);

// splice returns a section of array that is to be deleted so it changes the original array and it's last range is inclusive which is a deleteCount(no of elements to be deleted from original array)
console.log("B ",myArr);
const myn2 = myArr.splice(1,4)
console.log("C ",myArr);           // original array is changed after splice
console.log("Splice : ",myn2);