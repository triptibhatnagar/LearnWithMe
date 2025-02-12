// object literal - literally an object
// object is the basic unit
const user  = {
    username: "abc",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        // console.log("Got user details from db")
        // return `Username : ${username}`//ReferenceError: username is not defined
        // as it doesnot know which username
        // return `Username : ${this.username}`// Username : abc

        return this//functional/execution context
        /*{
            username: 'abc',
            loginCount: 8,
            signedIn: true,
            getUserDetails: [Function: getUserDetails]
        }
            
        all data of object is put together and it knows about it
        */
    }
};
console.log(user.username)
console.log(user.getUserDetails())
// global context
console.log(this)//{}
// in browser - this is Window object

// obj literal - prop, methods
/**
 * let myArr = [1,2,3]
 * prop - length
 * methods -  methods in Prototype
 */

// How map() know how many elements it have to traverse => here comes currect context => this 
// this means currect context

// to create new object, everytime all same work
// to reduce work, we have CONSTRUCTOR FUNCTIONS
// const promise1 = new Promise()
// const date = new Date()
// new - constructor function, allows to create multiple instances from a single object literal

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings = function() {
        console.log(`Welcome ${this.username}`);
    }
    // return this
    // variable = value passed => generally their names are kept same, to differentiate, we use this
    // this -> object
}

// const user1 = User("hey",27, true)
// console.log(user1)
/**<ref *1> Object [global] {
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
  navigator: [Getter],
  username: 'hey',
  loginCount: 27,
  isLoggedIn: true
} */

// const user2 = User("world", 1, false)
// console.log(user1)
// values are overrided
/**  username: 'world',
  loginCount: 1,
  isLoggedIn: false
} */

//   therefore, new keyword is used every time to get a new instance

const user1 = new User("hey",27, true)
const user2 = new User("world", 1, false)
console.log(user1)//User { username: 'hey', loginCount: 27, isLoggedIn: true }
console.log(user2)//User { username: 'world', loginCount: 1, isLoggedIn: false }

// if return not written, then also code works => return is implicitly defined

// new
/**
 * 1) an empty object is created = instance
 * 2) constructor function is called due to new keyword, packs the args and give it
 * 3) args injected in this keyword
 * 4) you get it inside function
 */

console.log(user1.constructor)
// [Function: User]

// instanceOf() in js