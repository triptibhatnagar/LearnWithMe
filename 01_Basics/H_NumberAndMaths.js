const score = 400.88518
console.log(typeof score);          //number
console.log(score);                 //400.88518

const num = new Number(5643)
console.log(typeof num);            //object
console.log(num);                   //[Number: 5643]

console.log(num.toString().length); //4
console.log(typeof num.toString())  //string
console.log(score.toFixed(2));      //400.89
console.log(score.toPrecision(4))   //400.9
console.log(score.toPrecision(3))   //401
console.log(score.toPrecision(2))   //4.0e+2
console.log(score.toPrecision(1))   //4e+2

const hundreds = 1000000
console.log(hundreds.toLocaleString())//10,00,000
console.log(Number.MIN_VALUE)       //5e-324
console.log(Number.MAX_VALUE)       //1.7976931348623157e+308
console.log(Number.MIN_SAFE_INTEGER)//-9007199254740991
console.log(Number.MAX_SAFE_INTEGER)//9007199254740991


//Maths library comes by default
console.log(Math)//Object [Math] {}
console.log(Math.abs(-4));//4 -> always positive result
console.log(Math.abs(4));//4
console.log(Math.round(3.8));//4
console.log(Math.ceil(6.8));//7
console.log(Math.floor(6.8));//6
console.log(Math.sqrt(36));//6
console.log(Math.min(8,2.3,0,-1.2));//-1.2
console.log(Math.max(8,2.3,0,-1.2));//8

console.log(Math.random());//b/w 0 and 1
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)
//max-min+1 -> range excluding 0