let p1 = {
    fname : "Akshad",
    lname : "Khan",
    location : {
        street :"2nd",
        lane : "3rd"
    }
}

// let p2 = p1 // reference is being copied 

// let p2 = {
//     ...p1
// } // shallow copy



let p2 = JSON.parse(JSON.stringify(p1))  // deep copy
p2.location.street = "5th"
console.log(p2)
console.log(p1)


// Create an object representing a type of tea with properties name , type and caffeine content

let tea = {
    name : 'Black Tea',
    type : 'Regular',
    caffeine_content : 'No-caffeine'
}

// acces and print the name and type properties of the tea object

console.log(tea.name)
console.log(tea.type)

// add a new property origin to the tea object

// m:1 tea.origin = "Indian"

Object.assign(tea,{origin:"Indian"})

console.log(tea)

// Remove the type property from tea object

delete tea.type

// Check if the tea object has property origin

console.log(Object.hasOwnProperty(tea.origin))

// Use a for in loop to print all properties of the tea object

for(const e in tea){
    console.log(e,'-',tea[e])
}

// Create a copy of the tea object

let copyTea = {
    ...tea
}

// Add a custom method describe to the tea object that returns a description string

tea.describe = function(){
    console.log("You will love it!!!")
}

