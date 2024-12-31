// ARRAY - collection of multiple items under single variable name
// resizeable
// mix of datatypes
// not associative -> cannot be accessed using arbitrary strings -> console.log(arr1["zero"]);
// zero-based idx
// shallow copy is a copy whose properties share the same reference
// deep copy is a copy whose properties do not share the same reference

const arr1 = [0, 1, 2, 3, 4, 5, true, "abc"]
const arr2 = new Array(1,2,3,4)
console.log(arr1);
/*
[
  0,    1,     2,
  3,    4,     5,
  true, 'abc'
]
*/
console.log(typeof arr1);//object
console.log(arr2);//[ 1, 2, 3, 4 ]
console.log(typeof arr2);//object
console.log(arr1[0]);//0

//Array methods
arr1.push(6)//insertion at end
arr1.push(7)
console.log(arr1);
arr1.pop()//deletion at end
console.log(arr1);
arr1.unshift(9)//insertion at beginning, all values of array are shifted -> so unshift() not optimized
console.log(arr1);
arr1.shift()//deletion at beginning
console.log(arr1);
console.log(arr1.includes(9))//false
console.log(arr1.indexOf(-11));//-1
console.log(arr1.indexOf(3))//3

const arrToStr = arr1.join()
console.log(arrToStr);//"0,1,2,3,4,5,true,abc,6" -> comma separated string

//array -> string : join()
//string -> array : split()

//slice vs splice
console.log("A1 ", arr1);
/*
A1  [
  0,    1,     2,
  3,    4,     5,
  true, 'abc', 6
]
*/
const sliceArr1 = arr1.slice(1,3)
console.log(sliceArr1);//[ 1, 2 ] -> last idx not included
console.log("B1 ", arr1);//no change in original array
/*
B1  [
  0,    1,     2,
  3,    4,     5,
  true, 'abc', 6
]
*/
console.log("A2 ", arr1);
/*
A2  [
  0,    1,     2,
  3,    4,     5,
  true, 'abc', 6
]
*/
const spliceArr1 = arr1.splice(1,3)
console.log(spliceArr1);//[ 1, 2, 3 ] -> last idx included
console.log("B2 ", arr1);//B2  [ 0, 4, 5, true, 'abc', 6 ] -> change in original array

const fruits = ["apples", "mangoes", "oranges"]
const veggies = ["spinach", "capsicum", "beans"]
// fruits.push(veggies)
console.log(fruits);//[ 'apples', 'mangoes', 'oranges', [ 'spinach', 'capsicum', 'beans' ] ] -> array as an element
// console.log(fruits[3][1]);//capsicum
console.log(fruits.concat(veggies));//[ 'apples', 'mangoes', 'oranges', 'spinach', 'capsicum', 'beans' ]
console.log(fruits);//[ 'apples', 'mangoes', 'oranges' ]

//push -> change in original array, concat -> no change in original array

//spread opeartor
const grocery = [...fruits, ...veggies]
console.log(grocery);//[ 'apples', 'mangoes', 'oranges', 'spinach', 'capsicum', 'beans' ]

const arr3 = [1,2,3,[4,5,[6,7,8]]]
console.log(arr3.flat(Infinity));//Infinity -> depth
/*
[
    1, 2, 3, 4,
    5, 6, 7, 8
]
*/

//PUSH, CONCAT, SPREAD, FLAT

console.log(Array.isArray("Tripti"));//false
//String to array -> join(), Array.from(string)
console.log(Array.from("Tripti"));//[ 'T', 'r', 'i', 'p', 't', 'i' ]
console.log(Array.from({
    name : "Tripti"
}));//[] -> interesting case
//specify keys or values

let score1 = 200
let score2 = 300
let score3 = 400
console.log(Array.of(score1, score2, score3));//[ 200, 300, 400 ]