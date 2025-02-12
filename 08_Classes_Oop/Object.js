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

/*
NEW KEYWORD FUNCTIONALITY
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.[JS does not provide constructor function through classes,  but with new keyword]

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/