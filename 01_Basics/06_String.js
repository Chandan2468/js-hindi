// To master string we just need to know all the string methods in console


const name = "Chandan"
const repoCount = 50

console.log(name + repoCount + " value");    // old way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);    // string interpolation using backtick

console.log("---------------------------------------------------------------------");
const gameName = new String('chandan-hh-c')    // another way of declaring string and in console we find this an advantage because we get additional methods inside it and length also.
console.log(gameName);
console.log(gameName[0]);

console.log(gameName.length);                // can also write console.log(gameName.__proto__.length);
console.log(gameName.toUpperCase());         // does not change the original value
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));


const newString = gameName.substring(0,4);
console.log("newstring  : ",newString);

const newString1 = gameName.slice(-8, 4);      // in slice we can give -ve index also
console.log("newstring1 : ",newString1);

const newString2 = "    chandan    "
console.log("newstring2 : ",newString2);
console.log("newstring2 : ",newString2.trim());



const url = "https://hitesh.com/hitesh%20choudhary"
url.replace('%20','-')
console.log("url : ",url);

console.log(url.includes('kumar'))

console.log("Converting string to array based on something here - ")

console.log(gameName.split('-'))