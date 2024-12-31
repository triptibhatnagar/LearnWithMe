//declaration of objects -> literal(not singleton), constructor(singleton)
//{} -> object, has key-value pairs
//object literals

const mySym = Symbol("key1");

const user = {
    //key   :   value
    name : "Tripti",                //String
    age : 19,                       //number
    loc : "Ambala",
    email : "tripti@google.com",
    isLoggedIn : false,             //boolean
    lastLoginDays: ["Mon","Sat"],   //array
    "full name" : "Tripti Bhatnagar",
    [mySym]: "mykey1",               //symbol
    prevAcc : null,
    // existingAcc 
}


//TO ACCESS
console.log(user.email);//tripti@google.com
// console.log(user[email]);//ReferenceError: email is not defined
console.log(user["email"]);//tripti@google.com
// console.log(user.full name);//SyntaxError: missing ) after argument list
console.log(user["full name"]);//Tripti Bhatnagar
console.log(user[mySym]);//mykey1
console.log(user.mySym);//undefined

// console.log(user[existingAcc]);//ReferenceError: existingAcc is not defined


//TO MODIFY
user.email = "triptibhatnagar@google.com"
// Object.freeze(user)
user.email = "triptib27272727@google.com"
console.log(user.email)//triptibhatnagar@google.com -> value not changed
console.log(user)
/*
{
  name: 'Tripti',
  age: 19,
  loc: 'Ambala',
  email: 'triptibhatnagar@google.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Mon', 'Sat' ],
  'full name': 'Tripti Bhatnagar',
  [Symbol(key1)]: 'mykey1'
}
*/
user.greeting = function(){
    console.log("Greetings user")
}
console.log(user.greeting());
//Greetings user
//undefined -> one execution automatically done
console.log(user.greeting);//[Function (anonymous)] -> function is not executed, but its reference is returned

user.greeting2 = function() {
    console.log(`Greetings ${this["full name"]}`);
    console.log(`Your email is ${this.email}`);
}
console.log(user.greeting2());
//  Greetings Tripti Bhatnagar
//  Your email is triptib27272727@google.com
//  undefined

// Object.create -> constructor

const appUser = new Object()//singleton object
console.log(appUser);//{}

const appUser1 = {}//non singleton object
console.log(appUser1);//{}

appUser.id = "abc123"
appUser.name = "Eva"
appUser.isLoggedIn = false
console.log(appUser);//{ id: 'abc123', name: 'Eva', isLoggedIn: false }

//OBJECT INSIDE OBJECT
const student = {
    rollno : 123,
    fullname: {
        studentfullname : {
            firstname : "Vishal",
            lastname : "Mishra"
        },
        parentsfullname : {
            fatherfullname : {
                firstname : "Sandeep",
                lastname : "Mishra"
            },
            motherfullname : {
                firstname : "Monika",
                lastname : "Mishra"
            }
        }
    }
}
console.log(student.fullname.parentsfullname.motherfullname.firstname);//Monika

//OPTIONAL CHAINING
console.log(student.fullname?.parentsfullname.motherfullname.firstname);//if fullname don't exist -> o/p undefined, not error

//COMBINING OBJECTS
const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {3:"z", 9:"y", 8:"x"}
const obj3 = {obj1, obj2}
console.log(obj3);
/*
{
  obj1: { '1': 'a', '2': 'b', '3': 'c' },
  obj2: { '3': 'z', '4': 'y', '5': 'x' }
}
*/
const obj4 = Object.assign(obj1, obj2)//Object.assign(source, target1, target2,...)
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'z', '8': 'x', '9': 'y' }

const obj5 = Object.assign({}, obj1, obj2)//obj1 and obj2 will go in {} where {} -> target and obj1, obj2 are source

const obj6 = {...obj1, ...obj2}
console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'z', '8': 'x', '9': 'y' }

//{obj1, obj2}, ASSIGN, SPREAD

//WHEN DATA COME FROM BACKEND - ARRAY OF OBJECTS
const users  = [
    {
        id : 1,
        email : "abc@google.com"
    },
    {
        id : 2,
        email : "def@google.com"
    },
    {
        id : 3,
        email : "ghi@google.com"
    },
    {
        id : 4,
        email : "jkl@google.com"
    },
    {
        id : 5,
        email : "mno@google.com"
    },
    {
        id : 6,
        email : "pqr@google.com"
    }
]

console.log(users[1].email)

console.log(appUser)//{ id: 'abc123', name: 'Eva', isLoggedIn: false }
console.log(Object.keys(appUser));//[ 'id', 'name', 'isLoggedIn' ] -> array
console.log(Object.values(appUser));//[ 'abc123', 'Eva', false ] -> array
console.log(Object.entries(appUser));//[ [ 'id', 'abc123' ], [ 'name', 'Eva' ], [ 'isLoggedIn', false ] ] -> array inside array

console.log(appUser.hasOwnProperty('isLoggedIn'));//true -> to check whether isLoggedIn(object's key) is present or not inside object
console.log(appUser.hasOwnProperty('isLogged'));//false