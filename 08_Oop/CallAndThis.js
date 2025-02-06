// 3 words - call, bind, apply
// earlier, call, bind extensively used in react but not now
// call stack - everything will execute, global execution context, functional execution contexts etc..
// this - current execution context

/*
Execution context

|   callme() context           |
|   function 2 context         |
|   function 1 context         |
|   Global Execution Context   |


function2() {
    callme()
}

Q. how will callme() know about that 'this' keyword is referring to what?
A. 'this' will refer to global execution context
*/

function setUserName(username) {
    this.username = username
    console.log("called")
}

function createUser(username, email, password) {
    // setUserName(username)
    // setUserName.call(username)// to hold reference, we use call()
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const chaiLover = new createUser("chai", "chai09@fb.com", "876")
console.log(chaiLover);//createUser { email: 'chai09@fb.com', password: '876' }
