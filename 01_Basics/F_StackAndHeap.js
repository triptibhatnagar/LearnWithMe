// Memory
// Stack Memory(Primitive)(Reference Variables)(Call By Value) -> copy is obtained ,
// Heap Memory(Non-Primitive)(Call By Reference) -> original value reference is obtained

let myName = "Tripti"
let herName = myName
herName = "Gemini"
console.log(herName);   //Gemini
console.log(myName);    //Tripti

let user1 = {
    name : "xyz",
    id : 123
}
let user2 = user1

console.log(user2);//{ name: 'xyz', id: 123 }
console.log(user1);//{ name: 'xyz', id: 123 }

user2.id = 987

console.log(user2);//{ name: 'xyz', id: 987 }
console.log(user1);//{ name: 'xyz', id: 987 }