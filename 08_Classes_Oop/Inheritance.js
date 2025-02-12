class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}
class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}
// const chai = Teacher("chai", "123", "chaiteacher@gmail.com")//TypeError: Class constructor Teacher cannot be invoked without 'new'

const chai = new Teacher("chai", "123", "chaiteacher@gmail.com")
chai.addCourse()

const masalachai = new User("masalachai", "678", "chaimasala@gmail.com")
// masalachai.addCourse()//TypeError: masalachai.addCourse is not a function
masalachai.logMe()
chai.logMe()

console.log(chai == masalachai);//false
console.log(chai == Teacher);//false
console.log(chai instanceof Teacher);//true
console.log(chai instanceof User);//true