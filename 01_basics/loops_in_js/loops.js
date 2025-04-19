// falsy values 

// false , 0 , -0 , undefined , NaN , null , ""

// truthy values

// "0" , true , 'false , " " , {} , [] , function()

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// while (condition) {
    
// }

// do {
    
// } while (condition);

// Higher Order Array Loops in JS


// for of

// let a = [1,2,3,4,5]

let a = "Hello"

// let a = {
//     a:2 , b : 3 , c : 4
// }

// for (const element of a) { // object is not iteratable
//     console.log(element)
// }

for (const key in a) {
    console.log(a[key])
}