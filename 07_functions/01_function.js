

function greet(name){
    console.log(`hello ${name}`);
    
}

// greet("Hitesh")
// greet("Piyush")


let globalVar = "I am global"

function modifyGlobal(){
    globalVar = "Im modified"
    let blockScopedVar = "I am blocked-scoped"
    console.log(blockScopedVar)
}

// modifyGlobal()

// Immediately invoked function expression

let config = function(){}()
// (()=>{})()

let person1 = {
    name : "akash" ,
    greet : function(){
        console.log(this)
    }
}

let person2 = {
    name : 'Hitesh'
}

person2()