// TASK 1 : create an Array containing different types of teas
let arr = ["Masla Tea", "Black Tea","Oolong Tea"]

// TASK 2 : Add chamomile tea to the existing tea
arr.push("Chamomile Tea")

// TASK 3 : Remove OOlong Tea from the list
arr.pop()


// TASK 4 : Sort the list of teas in alphabetical order
arr.sort()

// TASK 5 : Use for loop to print each type of Tea in array

for(let i = 0;i<arr.length;i++){
    console.log(arr[i])
}

// TASK 6 : Use a for loop to create array with all tea names in upper case

for(let i=0;i<arr.length;i++){
    arr[i]=arr[i].toUpperCase();
}
console.log(arr)


// TASK 7 : se for loop to find tea name with the most characters

let greatest = arr[0]
for(let i=1;i<arr.length;i++){
    greatest = greatest.length>arr[i]?greatest:arr[i];
}
console.log(greatest)

// TASK 8 : Use for loop reverse the order of tea array

let temp = []
for(let i=arr.length-1;i>=0;i--){
    temp.push(arr[i])
}
console.log(temp)