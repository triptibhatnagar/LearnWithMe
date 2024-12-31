// DATE
// Date object represents single moment on a platform defined from January 1, 1970
// calculated in milliseconds - long string
// In future - proposal : to make Temporal API a global object like Math

let date = new Date()
console.log(date)                       //2024-11-30T13:29:49.611Z
console.log(typeof date)                //object
console.log(date.toString())            //Sat Nov 30 2024 19:00:52 GMT+0530 (India Standard Time)
console.log(date.toDateString())        //Sat Nov 30 2024
console.log(date.toLocaleString())      //30/11/2024, 7:02:09 pm
console.log(date.toLocaleDateString()); //30/11/2024
console.log(date.toISOString())         //2024-11-30T13:32:09.253Z
console.log(date.toJSON())              //2024-11-30T13:32:09.253Z
/*
difference is that if you have an invalid date, .toJSON() will output null. However, .toISOString()'s behavior can vary. In firefox this outputs a string "Invalid Date" but in chrome it raises an exception.
*/

//to declare a specific date
let newDate1 = new Date(2024, 0, 25)
console.log(newDate1);                  //2024-01-24T18:30:00.000Z
console.log(newDate1.toDateString());   //Thu Jan 25 2024

let newDate2 = new Date(2005, 8, 27, 5, 3)
console.log(newDate2.toDateString());   //Tue Sep 27 2005
console.log(newDate2.toLocaleString())  //27/9/2005, 5:03:00 am

let newDate3 = new Date("2025-01-26")   //yy-mm-dd
console.log(newDate3.toDateString())    //Sun Jan 26 2025

let newDate4 = new Date("01-26-2025")   //mm-dd-yy
console.log(newDate4.toDateString())    //Sun Jan 26 2025

//timestamps
let timestamp1 = Date.now()
console.log(timestamp1);                //1732974011994 -> millisecond value
console.log(newDate4.getTime());        //1737829800000 -> millisecond value
console.log(Math.floor(Date.now()/1000))//1732974279 -> seconds value

let newDate5 = new Date()
console.log(newDate5.getFullYear());    //2024
console.log(newDate5.getMonth()+1);     //11
console.log(newDate5.getMonth());       //10 -> months are counted from 0
console.log(newDate5.getDate());        //30
console.log(newDate5.getDay());         //6 -> Saturday
console.log(newDate5.getTime());        //1732974412320

// console.log(newDate5.toLocaleString('default', {
//     weekday: "narrow"
// }))