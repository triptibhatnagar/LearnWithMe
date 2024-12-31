const course = {
    name: "DSA",
    price: 99,
    teacher: "KK"
}

console.log(course.name);//DSA
console.log(course["name"]);//DSA

//destructuring of objects {}
const {name} = course
console.log(name);//DSA

const {name:n} = course
console.log(n);//DSA

// const navbar = (props.company) => {} -> instead of this
// const navbar = ({company}) => {} -> this is done in React
// navbar(company = "Google")


//APIs
/*
how to write values coming from backend
earlier -> XML structure
now -> JSON -> {}
{
    "name": "KK",
    "coursename": "DSA",
    "price" : "free"
}
    keys and values both are strings 
*/


//API FORMAT

// {}
//JSON -> JAVASCRIPT OBJECT NOTATION

// [
//     {},
//     {},
//     {}
// ]
// array of objects

//JSON FORMATTER -> tool to format api