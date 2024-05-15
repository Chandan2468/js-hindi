const tinderUser = new Object()     // same as const tinderUser = {}
tinderUser.id = "1234abcd"
tinderUser.name = "Ckc"
console.log(tinderUser);

const regularUser = {
    email : "ckc@google.com",
    fullname :{
        userfullname:{
            firstname:"chandan",
            lastname:"chatterjee"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname?.userfullname.firstname);    // optional chainig i.e. if fullname is not available

console.log("Combinig Objects");

const obj1 ={1:"a" , 2:"b"}
const obj2 ={3:"c" , 4:"d"}
const obj3 ={obj1,obj2}               // problems come like array
console.log(obj3);

// // method - 1
// const obj4 = Object.assign(obj1,obj2)  // here obj1 gets modified as it acts as a target
// console.log("obj4 : ",obj4);


// // method - 2
// const obj5 = Object.assign({},obj1,obj2)        // {} it is optional as it guarantees that the result is an object and here obj1 doen't gets modified as {} acts as the target and also it improves readability as target,source1,....
// console.log("obj5 : ",obj5);

// console.log("obj1 : ",obj1);

// method - 3 (spread operator)
const obj6 = {...obj1, ...obj2}  // here obj1 gets modified but then also answer comes same as no duplicates entry are allowed inside an object
console.log("obj6 : ",obj6);

const users = [
    {
        id:1,
        email:"ckc2@gmail.com"
    },
    {
        id:2,
        email:"ckc2@gmail.com"
    }
]
console.log(users[1].email);
console.log(Object.keys(tinderUser));    // it returns an array
console.log(Object.values(tinderUser));    // it returns an array
console.log(Object.entries(tinderUser));    // it returns an array


console.log(tinderUser.hasOwnProperty('isLoggedIn'));