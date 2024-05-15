// There are two ways to declare an object one is by literal and other is by constructor
// singleton object - made from constructor i.e by Object.create
// non singleton object - made from literal

// object literals


const mySym = Symbol("key1")            // even if we add this mySym in the object then it's data type will become string and it will not remain Symbol

const JsUser = {
    name:"chandan",          // key here name is processed as string "name"
    age:18,
    email:"chandan@google.com",
    isLoggedIn:false,
    "full name":"chandan kumar chatterjee",
    mySym:"mykey1"
}

console.log(JsUser.email);
console.log(JsUser["email"]);           // this is the difference between array and object in object we can define our own key and this is the only way we can access full name
console.log(JsUser["full name"]);
console.log(typeof JsUser.email);
console.log(typeof JsUser);



console.log("mySym datatype : ",typeof JsUser.mySym);     // so use square brackets [mySym]:"mykey1"


JsUser.email = "ckc@google.com"     // to update the value 
//Object.freeze(JsUser)             // prevent updation values
JsUser.email = "abcd@google.com"

console.log(JsUser);

JsUser.greeting = function(){       // for this editing first comment the freeze line
    console.log("Hello JsUser");
}
console.log(JsUser.greeting);       // here only function reference comes and it's not executed
console.log(JsUser.greeting());     // here function gets executed with extra line print as undefined
console.log(JsUser);


JsUser.greetingTwo = function(){       
    console.log(`Hello JsUser, ${this.name}`);     // this is used to refer the same object
}

console.log("JsUser.greetingTwo : ",JsUser.greetingTwo());