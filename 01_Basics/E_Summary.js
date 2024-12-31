//Datatypes categorization(on the basis of storage and access) - Primitive(Call By Value) and Non-Primitive(Call By Reference)

//Primitive - 7
/*
1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt
*/

// Non- Primitive(Reference Type)
// Array, Objects, Functions

//JS is dynamically typed language

const score = 100
const value = 100.3
const isLoggedIn = true
const temp = null
let userEmail;
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2)//false, hence they are unique
const bigNo = 28476278764782678647236786324786478627846287364826n


const fruits = ["apple", "mango", "orange", "banana"]
let obj = {
    name : "abc",
    age : 12
}
const func = function() {
    console.log("Hello World")
}
console.log(typeof score);      //number
console.log(typeof value);      //number
console.log(typeof isLoggedIn); //boolean
console.log(typeof temp);       //object
console.log(typeof userEmail);  //undefined
console.log(typeof id);         //symbol
console.log(typeof id2);        //symbol
console.log(typeof bigNo);      //bigint
console.log(typeof fruits);     //object
console.log(typeof obj);        //object
console.log(typeof func);       //function -> or object function