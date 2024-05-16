const userEmail = "ckc@google.com"
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have any email");
}


// Falsy values
// false , 0 , -0 , BigInt 0n , null , undefined , Nan


// Truthy values
// true , [] , "0" , "false" , " " , {} , function(){} - empty function


const empobj = {}

if(Object.keys(empobj).length == 0){
    console.log("Object is empty");
}

// True statements : false == 0 , 0 == "" , false == ""

// Nullish Coalescing Operator(??): null undefined
// used if database returns multiple or no values and first non-zero value is assigned
// let val1;
val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 10
console.log(val1);


val1 = undefined ?? 20
console.log(val1);
