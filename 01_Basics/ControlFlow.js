//IF 
if(true) {
    //execute
}
if(false) {
    //not execute
}
if(2==2) {
    console.log("true")
}
const loggedIn = true
if(loggedIn) {
    console.log("Logged in")
}

//OPERATORS <, >, <=, >=, ==, !=, ===, !== 
if(2 == "2") {//only value is checked
    console.log("executed")
}
if(2 === "2") {//both value and datatype is checked
    console.log("executed")
}
const temperature = 6
if(temperature < 10) {
    console.log("Temperature is less than 10")//executed
}
console.log("Temperature is more than 10")//executed

//IF ELSE
if(temperature < 10) {
    console.log("Temperature is less than 10")//executed
}else {
    console.log("Temperature is more than 10")//not executed
}
const score = 200
if(score > 100) {
    const power = "fly"
    console.log(`user power : ${power}`)
}
// console.log(power);//ReferenceError: power is not defined due to block scope

//SHORT HAND NOTATION
const balance = 1000
if(balance > 500) console.log(`balance : ${balance}`), console.log("balance is more than 500") //IMPLICIT SCOPE - scope is assumed

//ELSE IF
if(balance < 500) {
    console.log("less than 500");
} else if(balance < 750) {
    console.log("less than 750");
} else if(balance < 900) {
    console.log("less than 9000");
} else {
    console.log("less than 1200");
}
//less than 1200

//AND(ampersand operator), OR(pipeline operator)
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard && 2==3) {
    console.log("Allowed to buy courses")
}
if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged In");
}

//SWITCH
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const monthNo = 3;
switch (monthNo) {
    case 1:
        console.log("January");
        break;
    case 2:         //shift+alt+down arrow : to duplicate selected text
        console.log("Februray");
        break;
    case 3:
        console.log("March");
        // break;
    case 4:
        console.log("April");
        // break;
    default:
        console.log("no case matched")
}
const monthName = "april"
switch (monthName) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Februray");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("no case matched")
}

//TRUTHY, FALSY VALUES - assumed to be true or false
// const useremail = "tripti@abc.com" //got user email 
// const useremail = "" //don't have user email
// const useremail = [] //got user email
const useremail = []
if(useremail) {
    console.log("got user email");
}else {
    console.log("don't have user email");
}

//FALSY VALUES : false, 0, -0, BigInt 0n, "", null, undefined, NaN
//TRUTHY VALUES : all other than falsy are truthy, "0", "false", " ", [], {}, function(){}
//as [] is truthy, how to check for empty array
if(useremail.length === 0) {
    console.log("Array is empty");
}
//as {} is truthy, how to check for empty object
const emptyObj = {}
if(Object.keys(emptyObj).length) {
    console.log("Object is empty");
}
console.log(false == 0);//true
console.log(false == '');//true
console.log(0 == '');//true

//NULLISH COALESCING OPERATOR (??) : null undefined
//checks safety, fallback to handle errors
let val1;                      //undefined
// val1 = 5 ?? 10              //5
// val1 = undefined ?? 12      //12
// val1 = null ?? 11           //11
val1 = null ?? 10 ?? 14        //10
console.log(val1);

//TERNARY OPERATOR
// condition ? true : false
const price = 100
price>=80 ? console.log("less than or equal to 80") : console.log("more than 80");//less than or equal to 80