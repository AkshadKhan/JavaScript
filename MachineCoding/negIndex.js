let arr = [1,2,3,4,5,6,7,87]


// Array.prototype.anyIndex = function(index){
//     let val = (index<0)? this[this.length+index] : this[index];
//     return val;
// }

// console.log(arr.anyIndex(-2))

let user = {
    name : "hitesh",
    email : "hitesh@chaicode.com",
    location : "India",
    password : 12344
}


// let userProxy = new Proxy(user,{
//     get(target , prop) {
//         if(prop==='password'){
//             throw new Error('Access Denied');
//         } 
        
//         return target[prop]
//     }
// });
// console.log(userProxy["password"])

let negativeIndex = function(arr){
    let pr = new Proxy(arr, {
        get(arr,index){
            index = Number(index)
            if(index<0) return index + arr.length
            return index
        },
        set(arr,index,value){
            if(index<0){
                index = Number(index) + arr.length
            }
            arr[index] = value;
            // return true
        }
    })
    return pr
}

let proxiedArray = negativeIndex(arr)
console.log(proxiedArray[-2])
proxiedArray[-5] = 100
console.log(proxiedArray)