// js prototypal behaviour
// prototype used for inheritance

// in browser
const newHeros = ["hulk", "spiderman"]
/*
0: "hulk"
1: "spiderman"
length: 2
[[Prototype]]: Array(0)
*/

/*
JS DEFAULT BEHAVIOUR - prototypal behaviour
prototypal behaviour - haar nahi maan na
if js is not finding that you are searching then it checks on more upper layers, access parents, grandparents, more great grandparents... until it finds null

-> new keyword, classes, this keyword, inheritance - all concepts were introduced through prototypal behaviour

 * WHERE DOES PROTOTYPE STOP?
 * [[Prototype]]: Array(0)
 * [[Prototype]]: Object
 * getters, setters...
 * 
 * ARRAY --> OBJECT --> null
 * STRINGS --> OBJECT --> null
 * object has no parent, In javascript everything is an object
 * FUNCTION --> ??
 */

function multiply(num) {
    return num*5;
}
multiply.power = 2
console.log(multiply(2))//10
console.log(multiply.power)//2
console.log(multiply.prototype)//{} -> by default context

// => Everything is obj in js
// function is function as well as an object too
// FUNCTION --> OBJECT --> null

function createUser(username, score) {
    this.username = username
    this.score = score
}
// can i inject functionalities in the function
createUser.prototype.increment = function() {
    // score++
    // jisne b call kia uska score bdha do
    this.score++
}
createUser.prototype.printMe = function() {
    // score++
    // jisne b bulaya uska dikhao
    console.log(`score : ${this.score}`)
}
// const chai = createUser("chai", 25)
const chai = new createUser("chai", 25)
// const tea = createUser("tea", 250)
const tea = new createUser("tea", 250)

// newHeros.prototype.map() - we don't use prototype keyword here
// newHeros.map()
chai.printMe()
// TypeError: Cannot read properties of undefined (reading 'printMe')

/**
 * properties have been injected, but when you transfer value from functions, then you did not tell that I have got these additional properties, all this is done by new keyword.
 */