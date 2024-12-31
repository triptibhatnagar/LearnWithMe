const coding = ["js", "py", "java", "cpp", "ruby"]

// stored in variable

const values1 = coding.forEach((item) => {
    console.log(item)
})
console.log(values1)
/*
js
py
java
cpp
ruby
undefined
*/

const values2 = coding.forEach((item) => {
    // console.log(item)
    return item
})
// console.log(values2) // undefined

// forEach do not return any value

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const morethan4 = myNums.filter((num) => num>4)
// console.log(morethan4);
// [ 5, 6, 7, 8, 9, 10 ]

// const morethan4 = myNums.filter((num) => {
//     num > 4
// })
// console.log(morethan4);// []

// const morethan4 = myNums.filter((num) => {
//     return num>4
// })
// console.log(morethan4);// [ 5, 6, 7, 8, 9, 10 ]

// const morethan4 = myNums.filter((num) => (num>4))
// console.log(morethan4);// [ 5, 6, 7, 8, 9, 10 ]

//scope opened - write return, then write condition
// without scope - write directly the condition


// how to do same thing in forEach
const newNums = []
myNums.forEach((num) => {
    if(num > 4) {
        // console.log(num)
        /*
        5
        6
        7
        8
        9
        10
        */
        newNums.push(num)
    }
})
console.log(newNums);// [ 5, 6, 7, 8, 9, 10 ]

const books = [
    {
        title : 'Book One',
        genre : 'Fiction',
        publish : 1981,
        edition : 2004
    },
    {
        title : 'Book Two',
        genre : 'Non-Fiction',
        publish : 1992,
        edition : 2008
    },
    {
        title : 'Book Three',
        genre : 'History',
        publish : 1999,
        edition : 2007
    },
    {
        title : 'Book Four',
        genre : 'Non-Fiction',
        publish : 1989,
        edition : 2010
    },
    {
        title : 'Book Five',
        genre : 'Science',
        publish : 2009,
        edition : 2014
    },
    {
        title : 'Book Six',
        genre : 'Fiction',
        publish : 1987,
        edition : 2010
    },
    {
        title : 'Book Seven',
        genre : 'History',
        publish : 1986,
        edition : 1996
    },
    {
        title : 'Book Eight',
        genre : 'Science',
        publish : 2011,
        edition : 2016
    },
    {
        title : 'Book Nine',
        genre : 'Non-Fiction',
        publish : 1981,
        edition : 1989
    }
]

// const userbooks = books.filter((book)=>book.genre==="History")
// console.log(userbooks)
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/

// const userbooks = books.filter((book) => book.publish > 2000)
// console.log(userbooks);
/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/

const userbooks = books.filter((book) => (book.publish > 1995 && book.genre==="History"))
console.log(userbooks);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/