const accountId = 144553
let accountEmail = "akshad@google.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;

// accountId = 2 // not allowed since it is constant


accountEmail = "ak@ak.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId); // 144553

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

var a = 5 
function hello()
{
    let a = 1000
    console.log(a)
}
hello()
console.log(a)


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])