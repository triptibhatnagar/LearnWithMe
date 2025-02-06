// let myName = "tripti"
let myName = "tripti     "
let yt = "chai aur code     "
// console.log(myName.length)
// console.log(myName.truelength())//undefined
console.log(myName.trim().length);
console.log(yt.trim().length);

// what i want : all strings must have this function called truelength()

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function() {
        console.log(`Spidy power is : ${this.spiderman}`)
    }
}

// heroPower.tripti() // -> can this be done

//every object must have tripti() function
Object.prototype.tripti = function() {
    console.log(`tripti is present in all objects`)
}

heroPower.tripti()
myHeros.tripti()

// as we know function, array and string all are objects, so i applied tripti() to the Object so that it is accessible to every array, function and string. [giving functions to top heirarchy level, so available to bottom ones]

//now what if i give power to array, will it go to object too by default??
//injecting in array
Array.prototype.helloWorld = function() {
    console.log("hello world")
}
//array
myHeros.helloWorld()//hello world
//object
// heroPower.helloWorld() //TypeError: heroPower.helloWorld is not a function


// INHERITANCE
const user = {
    name: "chai",
    email: "abc@google.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS',
    fullTime : true,
    __proto__ : teachingSupport//prototype refereing to TASupport
} 

teacher.__proto__ = user//teacher can access all properties of user
// this is called prototypal inheritance

// this was outdated

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)//
// ObjectConstructor.setPrototypeOf(o: any, proto: object | null) : Sets the prototype of a specified object o to object proto or null. Returns the object o.

let anotherUsername ="Chaiaurcode             "
String.prototype.truelength = function() {
    console.log(`${this}`)//Chaiaurcode
    console.log(`Truelength is : ${this.trim().length}`)
}
anotherUsername.truelength()//Truelength is : 11
"tripti".truelength()
"haldiWalaDoodh".truelength()
/*
tripti
Truelength is : 6
haldiWalaDoodh
Truelength is : 14
*/