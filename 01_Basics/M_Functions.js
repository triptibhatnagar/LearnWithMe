// Functions + Memory Management
/*
package of code to execute a task
*/
console.log("T");
console.log("R");
console.log("I");
console.log("P");
console.log("T");
console.log("I");

function sayMyName() {
    //definition
    console.log("T");
    console.log("R");
    console.log("I");
    console.log("P");
    console.log("T");
    console.log("I");
}

console.log(sayMyName);//[Function: sayMyName] -> reference
console.log(sayMyName());//execution
/*
T
R
I
P
T
I
*/

function add(n1, n2){
    console.log(n1+n2);
}

add()       //NaN
add(7,9)    //16
add(7,"9")  //79
add(7,"A")  //7A
add(7,null) //7

//PARAMETERS - inputs in function definition
//ARGUMENTS - values passed in function call

const result = add(3,2)
console.log(result);//undefined

function sub(n1, n2){
    // let result = n1-n2
    // return result
    return n1-n2
}

const answer = sub(12,9)
console.log(answer);//3

function loginUserMsg(username) {
    return `${username} just logged in`
}
console.log(loginUserMsg("Tripti"))//Tripti just logged in
console.log(loginUserMsg(""))// just logged in
console.log(loginUserMsg());//undefined just logged in

function loginUserMsg1(username) {
    // if(username === undefined) {
    //     console.log("Please enter any username");
    //     return
    // }
    if(!username)  {
        console.log("Please enter any username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg1())//Please enter any username
// undefined

//to return a default value if no argument is passed
function loginUserMsg2(username = "Sam") {
    if(!username)  {
        console.log("Please enter any username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMsg2());//Sam just logged in

//shopping card situation - where no of arguments are unknown
function calcCartPrice(num1) {
    return num1
}

console.log(calcCartPrice(2));//2
console.log(calcCartPrice(200, 400, 500));//200

//REST OPERATOR - pack in bundle and return

//diff in rest and spread - depends on usecase

function calcCartPrice2(...num1) {
    return num1
}
console.log(calcCartPrice2(200, 400, 500));//[ 200, 400, 500 ]
console.log(calcCartPrice2(200, 400, 500, 600, 700));//[ 200, 400, 500, 600, 700 ]

function calcCartPrice3(val1, val2, ...num1) {
    return num1
}
console.log(calcCartPrice3(200, 400, 500, 600, 700));//[ 500, 600, 700 ]

const user = {
    username: "rohit",
    // income : 19900
    incomes : 19900
}

//Object passed in function
function handleObj(obj) {
    console.log(`Username is ${obj.username} and income is ${obj.income}`);
}

handleObj(user)//Username is rohit and income is 19900
handleObj(user)//Username is rohit and income is undefined -> type safety must be done by if-else

handleObj({
    username : "geeta",
    income: 67000
})//Username is geeta and income is 67000

//ARRAYS PASSED IN FUNCTION
const newArr = [200, 400, 600, 900]
function returnSecondValOfArr(arr) {
    return arr[1]
}

console.log(returnSecondValOfArr(newArr));//400
console.log(returnSecondValOfArr([100,90,680,400]));//90
