//ARROW FUNC - a feature of ES6
//this keyword -> refer to current context

const user = {
    username: "abc",
    price: 999,
    welcomeMsg: function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
}
user.welcomeMsg//nothing printed
user.welcomeMsg()//abc, Welcome to website
// { username: 'abc', price: 999, welcomeMsg: [Function: welcomeMsg] }

user.username = "sam"
user.welcomeMsg()//sam, Welcome to website
// { username: 'sam', price: 999, welcomeMsg: [Function: welcomeMsg] }

console.log(this);
//{} -> node env, no context in global
//Window -> browser env, global object


//  THIS inside a function
function one() {
    let username = "pqr"
    console.log(this.username);//undefined -> context works in object, not in function
    console.log(this);
}
one()
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
}
*/

//FUNCTION DECLARATION
function f3() {//simple function
    let username = "pqr3"
    console.log(this.username);//undefined
}

const f4 = function() {//function expression
    let username = "pqr4"
    console.log(this.username);//undefined
    console.log(this);
    /*
    <ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Getter/Setter],
    atob: [Getter/Setter],
    btoa: [Getter/Setter],
    performance: [Getter/Setter],
    fetch: [Function: fetch],
    crypto: [Getter],
    navigator: [Getter]
    }
    */
}

const f5 = () => {//arrow function
    let username = "pqr5"
    console.log(this.username);//undefined
    console.log(this);//{}
}

f3()
f4()
f5()

//ARROW FUNCTION () => {}
    
//explicit return
const addTwoNum = (num1, num2) => {
    return num1+num2
}
console.log(addTwoNum(3,4));//7

//implicit return
// const addTwoNum2 = (num1, num2) => num1+num2
// console.log(addTwoNum2(2,6));//8
// const addTwoNum2 = (num1, num2) => (num1+num2)
// console.log(addTwoNum2(2,6));//8

//to return object in function

// const addTwoNum2 = (num1, num2) => {username: "sam"}
// console.log(addTwoNum2(2,6));//undefined
const addTwoNum2 = (num1, num2) => ({username: "sam"})
console.log(addTwoNum2(2,6));//{ username: 'sam' }

//wrapped in {} -> return must
//wrapped in () -> no return

const arr = [2,3,4,5,6]
// arr.forEach(function () {})
// arr.forEach(() => {})