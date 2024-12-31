//VARIABLES AND CONSTANTS
const accId = 1234 //can't be changed
let accEmail = "tripti@gmail.com"
var accPass = "23jh"
accCity = "Ambala"
let accState;//undefined

//keywords - const,let,var (compiler like Nodejs or v8 understands this)

// accId = 2390
// console.log(accId) //TypeError: Assignment to constant variable

accEmail = "tripti@gmail.in"
accPass = "2344"
accCity = "Dehradun"

console.table([accId, accEmail, accPass, accCity, accState])
/*
┌─────────┬───────────────────┐
│ (index) │ Values            │
├─────────┼───────────────────┤
│ 0       │ 1234              │
│ 1       │ 'tripti@gmail.in' │
│ 2       │ '2344'            │
│ 3       │ 'Dehradun'        │
│ 4       │ undefined         │
└─────────┴───────────────────┘
*/

//To declare variables - let, var
//To declare constants - const
/*
prefer not to use var because of issue in block scope and functional scope
*/