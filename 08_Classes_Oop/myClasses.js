// you arestudying after ES6
// class User {
//     constructor(username, password, email) {
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","123","chai@gmail.com")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// behind the scene
function User(username, password,email) {
    this.username = username;
    this.email = email;
    this.password = password
}
User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}
const tea = new User("tea","123","tea@gmail.com")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());