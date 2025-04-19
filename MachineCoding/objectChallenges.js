let expenses = [
    {description : "Groceries" , amount : 50 , category : "Food"},
    {description : "Electricity Bill" , amount : 100 , category : "Utilities"},
    {description : "Dinner" , amount : 30 , category : "Food"},
    {description : "Internet Bill" , amount : 50 , category : "Utilities"}
]

// Problem : Given a set of expenses extract total expenses per category

console.log(expenses.reduce((report,expense)=>{
    report[expense.category]=(report[expense.category] || 0)+expense.amount;
    return report
},{}))


// Proble : Given task list , extract uncompleted tasks and sort them based on their priorities.

let tasks = [
    {description: "Write report" , completed : false , priority : 2},
    {description: "Send Email" , completed : true , priority : 3},
    {description: "Prepare Presentation" , completed : false , priority : 1}
]

let taskList = tasks.filter((task)=>!task.completed).sort((a,b)=>a.priority-b.priority)
// console.log(taskList)


//Problem : calculate average movie ratings

let movieRatings = [
    {title : "Movie A", ratings : [4,5,3]} ,
    {title : "Movie B", ratings : [3,5,4]},
    {title : "Movie C", ratings : [3,4,2]}
]

let avgList = movieRatings.map((movie)=>{
    let avg = movie.ratings.reduce((sum,ratings)=>sum+ratings) / movie.ratings.length;
    return {title : movie.title , avgRatings : avg}
})

console.log(avgList)