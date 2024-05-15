// by default the begining date is jan 1 , 1970
// currently JS is working on temporal to remove the inconsistencies

let myDate = new Date()
console.log(myDate)        // not readable
console.log(myDate.toString())   // readable
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())
console.log(myDate.toUTCSString)
console.log(typeof myDate)

/*
toDateString() : Mon May 13 2024
toTimeString() : 12:26:03 GMT+0530 (India Standard Time)
toLocaleString() : 13/5/2024, 12:26:03 pm
toISOString() : 2024-05-13T06:56:03.455Z
toUTCSString : undefined
*/

let myCreatedDate = new Date(2023,0,24)    // month begins from 0 in JS
console.log(myCreatedDate.toString())

let dt = new Date("01-24-2020")      // date in another format mm-dd-yyyy
console.log(dt.toLocaleString())

let myTimeStamp = Date.now()         // we can use new also
console.log(myTimeStamp);            // give time in milliseconds from default date
console.log(myCreatedDate.getTime()) // give time in ms from default date
console.log(Math.floor(Date.now()/1000))    // convert time in ms to sec


let newDate = new Date()
console.log(newDate.getMonth()+1)         // index begins from 1
console.log(newDate.getDate())

// toLocalestring is an important methods as it takes an object where we can define our own format

newDate.toLocaleString('default',{
    weekday : "long",                      // mon as monday
})