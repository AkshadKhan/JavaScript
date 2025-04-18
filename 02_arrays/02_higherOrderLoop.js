const coding = ['js','ruby','python','cpp']

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

// filter

const myNums = [1,2,3,4,5,6,7,8,9,10]

let nums = myNums.filter((nums)=>nums>5)
console.log(nums)

let o = {
    f:0
}

let n = myNums.filter(function(nums){return nums>this.f},o)
console.log('nums',n)


// map

let obj = {
    factor:100
}

let multiple = myNums.map(function(e){
    return e * this.factor
},obj)

console.group(multiple)

const multiplier = {
    factor: 3
  };
  
  const numbers = [1, 2, 3];
  
  const result = numbers.map(function (num) {
    return num * this.factor;
  }, multiplier);

  console.log(result)

// reduce 


let sum = myNums.reduce((ac,cur)=>{
    return ac+cur
},0)

console.log(sum)