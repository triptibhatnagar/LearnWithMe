// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// {} => SCOPE (eg - of function, if-else etc.)
var c = 300//GLOBAL SCOPE
let a = 60
if(true) {//BLOCK SCOPE
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ",a);//INNER: 10
}
//global available in block, but block not available in global

// console.log(a);//ReferenceError: a is not defined
// console.log(b);//ReferenceError: b is not defined
console.log(c);//30 -> hence, var is not used

console.log(a);//60


//NESTED SCOPE - child func can access parent func variables, not vice-versa

//SCOPE IN FUNCTION INSIDE FUNCTION
function f1() {
    const username = "abc"
    function f2() {
        const website = "yt.com"
        console.log(username);
    }
    // console.log(website);//ReferenceError: website is not defined
    f2()
}
f1() //abc

//SCOPE IN IF STATEMENTS
if(true) {
    const username = "xyz"
    if(username == "xyz") {
        const website = "youtube"
        console.log(username+website); //xyzyoutube  
    }
    // console.log(website);//ReferenceError: website is not defined
}
// console.log(username);//ReferenceError: username is not defined

//INTERESTING CONCEPT : HOISTING
console.log(add1(5));//6 //HOISTING

function add1(num) {//FUNCTION
    return num+1
}

// console.log(add1(5));//6

console.log(add2(5));//ReferenceError: Cannot access 'add2' before initialization, NO HOISTING FOR FUNCTION EXPRESSION

const add2 = function(num) {//FUNCTION EXPRESSION
    return num+2
}
// console.log(add2(5));//7