let score = null //Symbol('123')
console.log(typeof score)//object

let scoreInNum = Number(score)
console.log(typeof scoreInNum)//number
console.log(scoreInNum)//0

/*TO NUMBER
"33" -> 33
"33abc" -> NaN
true -> 1
false -> 0
null -> 0
undefined -> NaN
1238648726487236487164781648716472364876238469823n -> 1.2386487264872364e+48
Symbol -> number //TypeError: Cannot convert a Symbol value to a number
*/

let isLoggedIn = Symbol('123')
console.log(typeof isLoggedIn);//symbol
let isLoggedIn_boolean = Boolean(isLoggedIn)
console.log(typeof isLoggedIn_boolean)//boolean
console.log(isLoggedIn_boolean)//true

/*TO BOOLEAN
1 -> true
0 -> false
41 -> true
"" -> false
" " -> true
"abc" -> true
null -> false
undefined -> false
1238648726487236487164781648716472364876238469823n -> true
Symbol('123') -> true
*/

let no = Symbol('123abc')
console.log(typeof no);//symbol
let noInString = String(no)
console.log(typeof noInString)//string
console.log(noInString)//Symbol(123abc)

/*TO STRING
33 -> "33"
true -> "true"
false -> "false"
undefined -> "undefined"
null -> "null"
1238648726487236487164781648716472364876238469823n -> "1238648726487236487164781648716472364876238469823"
Symbol('123abc') -> "Symbol(123abc)"
*/

let value = 8
let negative = -value
console.log(typeof negative)//number
console.log(negative)//-8

//ARITHMETIC OPERATORS
console.log(2+2)//4
console.log(2-2)//0
console.log(2*2)//4
console.log(2/2)//1
console.log(2%2)//0
console.log(2**2)//4

let str1 = "hey"
let str2 = "how are you"
let str3 = str1+" "+str2
console.log(str3)   //hey how are you
console.log("1"+2)  //12
console.log(1+"2")  //12
console.log("1"+2+2)//122
console.log(1+2+"2")//32
console.log(true)   //true
console.log(+true)  //1
console.log(+false) //0
console.log(+"")    //0
console.log(+"12abc")//NaN
console.log(+"123");//123
console.log(typeof +"123");//number


let num1, num2, num3
num1 = num2 = num3 = 8
console.log(num1, num2, num3)//8 8 8

let i = 2
// console.log(++i) //3
console.log(i++) //2