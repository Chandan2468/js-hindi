const score = 400
console.log(score)
const balance = new Number(100)  // guarantees that we will get a number
console.log(balance)             // here it specially defines it's a number
console.log(balance.toString())  // advantage of converting to string is that we get added methods like length,concate etc.
console.log(balance.toString().length)
console.log(balance.toFixed(2))  // we will use this method a lot


const otherNumber = 24.8966
console.log(otherNumber.toPrecision(3))   // remember it returns a string

const anyNumber = 1000000
console.log(anyNumber.toLocaleString())  // by default gives in US standard
console.log(anyNumber.toLocaleString('en-IN'))


console.log("********MATHS********")

console.log(Math)                 // In vs code it only shows object but in console we can see the properties also
console.log("absolute : ",Math.abs(-4)) 
console.log("round : ",Math.round(4.84)) 
console.log("ceil : ",Math.ceil(4.2))
console.log("floor : ",Math.floor(4.99))  
console.log(Math.max(4,8,12,16)) 
console.log(Math.random())        // always lies from 0 to 1 , 1 is exclusive
console.log(Math.random()*10)   // get a number between 0 to 9
console.log((Math.random()*10)+1)   // get a number between 1 to 10
console.log(Math.floor(Math.random()*11))  // gives number 0-10 both inclusive
console.log(Math.floor(Math.random()*11) + 1)  // gives result from 1-10

// to get any number range

const min = 10
const max = 20

const formula = Math.floor(Math.random() * (max - min + 1)) + min  // +1 to avoid 0 values and +min for getting in the required range