// .then, .catch, fetch()
// xhr not used nowadays
// browser diagrams, network calls, browser apis
// everything is seen as object or prototype

// PROMISE
// The Promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value
// => task given to promise - can't be completed instantly but are in queue
// => asynchronous operation(like cryptography, networking, file handling) - takes time
// => for asynchronous operation - async await, promises used
// A Promise has 3 states
// pending: initial state, neither fulfilled nor rejected
// fulfilled: meaning that the operation was completed successfully
// rejected: meaning that the operation failed



// mostly promises consumed than creation
fetch('https://something.com').then().catch().finally()  //promises being consumed 
/*
 * then - if response arrive
 * catch - if error occurs
 * finally - everything
 */

// but before consuming, learn how they are created
// Promise is an object
// by new keyword, we get another instance of object
// Libraries like Q, BlueBird were used earlier
// promise reduce callback hell
// CREATION
const promise1 = new Promise(function(resolve, reject) {
    // do an async task
    // db calls, cryptography, n/w calls
    setTimeout(function() {
        console.log("async task is complete")
        resolve()// resolve connected
    },1000)
})
// CONSUMPTION
promise1.then(function() {
    console.log("Promise consumed")
})
// then directly connected with resolve
// OUTPUT - async task is complete
// then and resolve - we have not linked them
// OUTPUT -
// async task is complete
// Promise consumed

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(function() {
    console.log("async 2 resolved")
})
// OUTPUT
// async task is complete
// Promise consumed
// async task 2
// async 2 resolved

const promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
      // data can also be passed
        resolve({
            username : "ABC",
            email : "abc@gmail.com"
        })
    }, 1000);
})
promise3.then(function(user) {
    console.log(user)
})
// OUTPUT
// async task is complete
// Promise consumed
// async task 2
// async 2 resolved
// { username: 'ABC', email: 'abc@gmail.com' }

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username : "pqr", password : "123"})
        }else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})
// promise4.then().catch()

// avoiding callback hell
// const username = promise4.then((user) => {
//     console.log(user);
//     return user.username
// })

// console.log(username);
// OUTPUT
/* 
Promise { <pending> }
async task is complete
Promise consumed
async task 2
async 2 resolved
{ username: 'ABC', email: 'abc@gmail.com' }
node:internal/process/promises:392
      new UnhandledPromiseRejection(reason);
      ^

UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something went wrong".
    at throwUnhandledRejectionsMode (node:internal/process/promises:392:7)     
    at processPromiseRejections (node:internal/process/promises:475:17)        
    at process.processTicksAndRejections (node:internal/process/task_queues:106:32) {
  code: 'ERR_UNHANDLED_REJECTION'
}

Node.js v23.3.0
*/

promise4.then((user) => {
    console.log(user);
    return user.username
    // if user.username not in variable, where it is going
    // chaining is done, it is returned to next then()
}).then((username) => {
    console.log(username)
}).catch(function(err) {
    console.log(err)
}).finally(() => {// work that needs to be done is completed or not
    console.log("The promise is either resolved or rejected")
})
/*
async task is complete
Promise consumed
async task 2
async 2 resolved
{ username: 'ABC', email: 'abc@gmail.com' }
ERROR: Something went wrong
*/

// if error = false
/*
async task is complete
Promise consumed
async task 2
async 2 resolved
{ username: 'ABC', email: 'abc@gmail.com' }
{ username: 'pqr', password: '123' }
pqr
*/

// using finally
/*
async task is complete
Promise consumed
async task 2
async 2 resolved
{ username: 'ABC', email: 'abc@gmail.com' }
ERROR: Something went wrong
The promise is either resolved or rejected
*/
// HISTORY
// are these still reasons to use promise libraries like Q or BlueBird now
// when promises not available in JS, by default, async await was used but syntax of promises was good so all, so libraries were used through which all functionalities like catch, then , fetch used, so library was integrated in js
// performance comparison - libraries v/s native promises
// in node js, native promises performance is high than libraries


const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username : "js", password : "123"})
        }else {
            reject('ERROR: js went wrong')
        }
    }, 1000);
})

// different approach - async await, instead of then catch
// async function consumePromise5() {
//     const response = await promise5// await -> will take time
//     console.log(response);
// }
// consumePromise5()
// This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().
// async await cannot handle errors directly

async function consumePromise5() {
    try {
        const response = await promise5// when promise5 is resolved
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromise5()
/*
async task is complete
Promise consumed
async task 2
async 2 resolved
{ username: 'ABC', email: 'abc@gmail.com' }
ERROR: Something went wrong
The promise is either resolved or rejected
ERROR: js went wrong
*/

// bts
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        const data = await response.json()// this takes time too, so await is used -> now all values printed
        console.log(data);
    } catch (error) {
        console.log("Error"+error)
    }
}
getAllUsers()
/*
Promise { <pending> }
async task is complete
Promise consumed
async task 2
async 2 resolved
{ username: 'ABC', email: 'abc@gmail.com' }
ERROR: Something went wrong
The promise is either resolved or rejected
ERROR: js went wrong
*/

// doing above in then catch format
// as fetch('https://jsonplaceholder.typicode.com/users') is a promise so then catch is used here
fetch('https://api.github.com/users/triptibhatnagar').then((response) => {//data to be received
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})
/*
{
  login: 'triptibhatnagar',
  id: 144587779,
  node_id: 'U_kgDOCJ48Aw',
  avatar_url: 'https://avatars.githubusercontent.com/u/144587779?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/triptibhatnagar',
  html_url: 'https://github.com/triptibhatnagar',
  followers_url: 'https://api.github.com/users/triptibhatnagar/followers',       
  following_url: 'https://api.github.com/users/triptibhatnagar/following{/other_user}',
  gists_url: 'https://api.github.com/users/triptibhatnagar/gists{/gist_id}',     
  starred_url: 'https://api.github.com/users/triptibhatnagar/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/triptibhatnagar/subscriptions',
  organizations_url: 'https://api.github.com/users/triptibhatnagar/orgs',        
  repos_url: 'https://api.github.com/users/triptibhatnagar/repos',
  events_url: 'https://api.github.com/users/triptibhatnagar/events{/privacy}',   
  received_events_url: 'https://api.github.com/users/triptibhatnagar/received_events',
  type: 'User',
  user_view_type: 'public',
  site_admin: false,
  name: 'Tripti Bhatnagar ',
  company: null,
  blog: '',
  location: null,
  email: null,
  hireable: null,
  bio: '👋 Front End Developer passionate about creating engaging user experiences 💻✨| Eager to learn and contribute to web development community 🚀🌟',        
  twitter_username: null,
  public_repos: 11,
  public_gists: 0,
  followers: 1,
  following: 1,
  created_at: '2023-09-10T08:14:17Z',
  updated_at: '2024-12-29T16:36:41Z'
}
[
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object]
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: [Object]
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: [Object]
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications'
    }
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: [Object]
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services'
    }
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: [Object]
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems'
    }
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: [Object]
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications'
    }
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: [Object]
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers'
    }
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: [Object]
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers'
    }
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: [Object]
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies'
    }
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: [Object]
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models'
    }
  }
]
async task is complete
Promise consumed
async task 2
async 2 resolved
{ username: 'ABC', email: 'abc@gmail.com' }
ERROR: Something went wrong
The promise is either resolved or rejected
ERROR: js went wrong
 */