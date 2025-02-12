class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }
    // createId() {
    //     return `123`
    // }
    static createId() {
        return `123`
    }
}
const user1 = new User("user1avc")
// console.log(user1.createId());

class Teacher extends User{
    constructor(username,email) {
        super(username)
        this.email = email
    }
}
const teddy = new Teacher("teddy", "teddy.cim")
teddy.logMe()
console.log(teddy.createId());
