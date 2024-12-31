const firstName = "Tripti"
const lastName = "Bhatnagar"
const age = 19
const fullName = firstName+" "+lastName+" age is "+age
console.log(fullName)//Tripti Bhatnagar age is 19
console.log(fullName.toLowerCase());//tripti bhatnagar age is 19

console.log(typeof fullName)//string
console.log(`Hello! My name is ${firstName} ${lastName} and my age is ${age}.`)//Hello! My name is Tripti Bhatnagar and my age is 19. //STRING INTERPOLATION

const str = new String("Hello-World")
console.log(typeof str)//object
//length property and many methods

console.log(str)                    //[String: 'Hello-World']
console.log(str[7])                 //o
console.log(str.__proto__);         //{}
console.log(str.length)             //11
console.log(str.toUpperCase())      //HELLO-WORLD
console.log(str.charAt(7))          //o
console.log(str.indexOf('o'))       //4
const newStr = str.substring(0,4)
console.log(newStr);                //Hell
const newStr2 = str.substring(-10,5)//-10 treated as 0
console.log(newStr2);               //Hello
const str2 = str.slice(0,4)
console.log(str2);                  //Hell
const str3 = str.slice(-10, 5)
console.log(str3)                   //ello
const str4 = "          hello        "
console.log(str4)                   //          hello        
console.log(str4.trim());           //hello
const url = "https://google.com/tripti27%bhatnagar"
console.log(url.replace("27%","-")) //https://google.com/tripti-bhatnagar
console.log(url.includes("triptiii"))//false
console.log(url.includes("tripti")) //true

//string to array
const str5 = "abc-def-ghi"
console.log(str5.split("-"))//[ 'abc', 'def', 'ghi' ]