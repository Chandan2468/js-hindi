let score = "48"
console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score) // guarantees that the score we get from forms is a number
console.log(typeof valueInNumber);
console.log(valueInNumber)

// but if we write 
let score1 = "48abcd"
let valueInNumber1 = Number(score1) // here it is converted to number but if we print it , it will show Nan
console.log(typeof valueInNumber1);
console.log(valueInNumber1)


let score2 = null
let valueInNumber2 = Number(score2) // here it is converted to number but if we print it , it will show 0
console.log(typeof valueInNumber2);
console.log(valueInNumber2)


let score3 = undefined
let valueInNumber3 = Number(score3) // here it is converted to number but if we print it , it will show Nan
console.log(typeof valueInNumber3);
console.log(valueInNumber3)


let score4 = "chandan"
let valueInNumber4 = Number(score4) // here it is converted to number but if we print it , it will show Nan
console.log(typeof valueInNumber4);
console.log(valueInNumber4)


// summary
// "48" -> 48
// "48abcd" -> NaN
// true -> 1
// "chandan" -> Nan
// null -> 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1         -> true
// ""        -> false
// "chandan" -> true



let somenum = 48
let stringnumber = String(somenum);
console.log(stringnumber);
console.log(typeof stringnumber)


// ***********************  Operations *********************** //

let value = 4
let negvalue = -value
console.log(negvalue);
console.log(4+4);
console.log(4*4);
console.log(4-4);
console.log(4/8);
console.log(22%5);


let str1 = "hello "
let str2 = "chandan"
let str3 = str1 + str2
console.log(str3);


console.log("String operation")

console.log("1" + 2)
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(2 + 2 + "1")
console.log(true)
console.log(+true)
// console.log(true++)
console.log(+"")


console.log("Assignment operation")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2



