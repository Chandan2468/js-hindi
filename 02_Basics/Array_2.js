const heros = ["thor","ironman"]
const dc = ["flash","batman"]

// heros.push(dc)            // here array's doesn't merge but one array is pushed into other
// console.log(heros);
// console.log(heros[2][0]);

const allheros = heros.concat(dc);
console.log(heros);                 // original array will not change
console.log(allheros);

// const Array1 = [1,2,3,4,5];
// const Array2 = [5,6,7,8,9,10];
// const Array3 = [0,0,0];
// const Array4 = [1,3,9,19];
// const concatAll = Array1.concat(Array2, Array3,Array4)
// console.log(concatAll)

// spread the array for concat another method
const all_new_heros = [...heros,...dc]
console.log(all_new_heros);


const messyArr = [1,2,3,[4,5,6],7,[8,[9,10]],11,12]
const usableArr = messyArr.flat(Infinity)    // infinity is till how many depth we need


console.log(Array.isArray("Chandan"));
console.log(Array.from("1234533"));     // convert it into an array
console.log(Array.isArray({name : "Chandan"}));    // returns an empty array if it is unable to convert so need to mention explicitly

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.of(score1,score2,score3,score4));