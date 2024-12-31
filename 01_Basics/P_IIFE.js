// IIFE - Immedaitely Invoked Function Expression
/*
IIFE is the function that runs as soon as it is defined.
They are used to avoid global scope pollution.
(More global scope variables can lead to global scope pollution as the naming conflicts arises)
*/
//Eg - DB connection file, as soon as application start DB connection is set up

// function f1() {
//     console.log("DB Connected");
// }
// f1()//DB Connected

//named IIFE
(function f1() {
    //named iife
    console.log("DB Connected");
})();//DB Connected

//Syntax of IIFE 
/*
()()
first parenthesis is for function definition
second parenthesis is for function execution
*/
// (()=>{
//     console.log("DB Connected");
// })()//TypeError: (intermediate value)(...) is not a function

(function f2() {
    console.log("DB Connected");
})();//TypeError: (intermediate value)(...) is not a function -> because iife is invoked, but don't know where to stop context //DB Connected

(()=>{//unnamed IIFE
    // arrow functions in IIFE
    console.log("DB Connected");
})();//DB Connected

((name)=>{//unnamed IIFE
    // with parameters
    console.log("DB Connected to",name);
})("tripti")//DB Connected to tripti

//IIFE starts executing but don't know where to stop, so there's a need of ; after a IIFE to execute another function as well, otherwise error arises.