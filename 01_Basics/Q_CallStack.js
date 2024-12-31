/** IMPORTANT FOR INTERVIEWS
 * 
 * Javascript Execution Context - how whole code of js is executed
 * JS runs program in 2 phases
 * Firstly, after code files are given to js, Global Execution Context - banta hee banta h
 * 'this' reference variable = Global Execution Context
 * Node, Deno, Browser have different global execution context
 * this in Browser = Window object
 * JS is single threaded : all this is executed in a thread
 * 
 * GLOBAL EXECUTION CONTEXT
 * FUNCTION/ FUNCTIONAL EXECUTION CONTEXT
 * EVAL EXECUTION CONTEXT - property of global object
 * 
 * 2 phases after Global Execution Context :
 * 1) Memory Creation Phase or Creation Phase - memory allocated only
 * 2) Execution Phase - 
 *
 * Call Stack - how functions go inside of memory, how they execute and how they get out of it
 * one()
 * two()
 * three()
 *                  |                          |
 *                  |                          |
 *                  |                          |
 *                  |                          |
 *                  |                          |
 *                  |                          |
 *      7) three()  | 8) three()               | 9) three()
 *      4) two()    | 5) two()                 | 6) two()
 *      1) one()    | 2) one()                 | 3) one()
 *                  | Global Execution Context |
 *                  |__________________________|
 * one()
 *      two()
 *          three()
 *                  |                          |
 *                  |                          |
 *                  |                          |
 *                  |                          |
 *                  |                          |
 *                  |                          |    LIFO
 *      5) three()  | 6) three()               |    7)three()
 *      3) two()    | 4) two()                 |    8)two()
 *      1) one()    | 2) one()                 |    9)one()
 *                  | Global Execution Context |
 *                  |__________________________|
 */ 
let  val1 = 10
let  val2 = 20
function add(num1, num2) {
    total = num1+num2;
    return total;
}
let result1 = add(val1, val2);
console.log(result1);//30
let result2 = add(12,28)
console.log(result2);//40

/**
 * 1) Global execution context is made and its aloocation to this reference variable
 * 2) Memory phase 
 *      val1 -> undefined
 *      val2 -> undefined
 *      add -> definition
 *      result1 -> undefined
 *      result2 -> undefined
 * 3) Execution Phase
 *      val1 <- 10
 *      val2 <- 20
 *      there is nothing to execute in add
 *      as result1 needed add so :-
 *      add <- new execution context of add function is made
 *                  new variable environment + Execution thread
 *                  i) Memory Phase         ii) Execution Phase
 *                  val1 -> undefined       num1 <- 10
 *                  val2 -> undefined       num2 <- 20
 *                  total -> undefined      total <- 30
 *      total value returned in global execution context
 *      now, new execution context gets deleted and we go back to the 3) Execution phase
 * 
 *      result1 <- 30
 *      as result2 needed add so :-
 *      add <- new execution context of add function is made
 *                  new variable environment + Execution thread
 *                  i) Memory Phase         ii) Execution Phase
 *                  val1 -> undefined       num1 <- 12
 *                  val2 -> undefined       num2 <- 28
 *                  total -> undefined      total <- 40
 *      total value returned in global execution context
 *      now, new execution context gets deleted and we go back to the 3) Execution phase
 */