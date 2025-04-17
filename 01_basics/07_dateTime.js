let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.getDay())
console.log(mydate.getDate())
console.log(mydate.getHours())
console.log(mydate.getTime().toFixed())

console.log(typeof mydate) // object

let myCreatedDate = new Date(2023,0,23)

console.log(myCreatedDate.toString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

