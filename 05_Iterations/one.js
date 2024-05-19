// for loop


for (let index = 0; index <= 10; index++) {
    const element = index;    
    console.log(element);
}


for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 4; j++) {
        console.log(`Inner loop value ${j} and ${i}`);
        }
    
}
const myArr = ["flash" , "batman" , "superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}