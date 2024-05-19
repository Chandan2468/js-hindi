const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObj) {

        console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "cpp", "java", "py"]

for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")

for (const key in map) {
    console.log(key);              // map is not iterable so it will show nothing
    }

/*
We can use For of loop for values printing/for iterating over values directly over [[[[ Strings & Array  ]]]
We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings .
We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.
*/