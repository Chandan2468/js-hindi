const isUserLoggedIn = true


if(2 == '2'){
    console.log('executed');
}

if(2 !== '2'){
    console.log("Data type didn't match");
}

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`User power : ${power}`);
}
// single line if statement comes under implicit scope or even we can take it to double line if we use comma

const balance = 200

if(balance > 100) console.log("test1"),    // not good practice
console.log("test2");;