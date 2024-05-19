// Array specific loops
// for of loop

const myArr = [1,2,3,4,5,6,7,8,9,10]

for (const i of myArr) {
    console.log(i);
}

const greetings = "Hello World"

for (const i of greetings) {
    console.log(i);
}

// Maps - JS object

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")

console.log(map);

for (const [key,value] of map) {
    console.log(key," : ",value);    
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
for (const [key,value] of myObj) {       // myObj is not iterable by this way
    console.log(key," : ",value);    
}