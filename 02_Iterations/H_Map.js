const myNums = [1,2,3,4,5,6,7,8,9,10]
// add 10 to each num in myNums
const newNums = myNums.map((num) => {
    return num+10
})
console.log(newNums)
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

// do this work with forEach
const add10nums = []
myNums.forEach((num) => {
    add10nums.push(num+10)
})
console.log(add10nums)
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

// CHAINING - 2,3 methods applied
// eg - map().map().filter()
const chaining = myNums.map((num)=>(num*10)).map((num)=>num+1).filter((num)=>(num>=40))
console.log(chaining)

//1st map
/*
[
  10, 20, 30, 40,  50,
  60, 70, 80, 90, 100
]
*/
//2nd map
/*
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
*/
//filter
/*
[
  41, 51,  61, 71,
  81, 91, 101
]
*/

// map - entire array
// filter -work on true/false