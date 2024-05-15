// de-structuring of objects (it also happens in array)


const course = {
    name:"js in hindi",
    courseinstructor:"Hitesh",
    price:999
}
// console.log(course.courseinstructor);
const {courseinstructor : inst} = course    // destructuring it so that we don't have to write the lengthy keys again and again
console.log(inst);


// API documentation - menu card
// we get some values from backened and how we write those vakues is API
// In initial days values comes as XML structure which is quite complex but today it comes in json (javascript object notation)
// json is just an object without name eg
// {
//       name:"hitesh",
//       course:"Js in hindi"
// }
/* API may comes in array format eg
{
    {},
    {}
}
*/
// json formatter helps us to understand the API code