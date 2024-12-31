const coding = ["js", "py", "java", "cpp", "ruby"]

// forEach() is inbuilt in array
// high order function

// coding.forEach(function name() {});

// forEach(a callback function)
// a function that is being called by another function as an argument

coding.forEach(function(item) {
    console.log(item)
})
/*
js
py
java
cpp
ruby
*/

coding.forEach((item) => {//arrow function
    console.log(item)
})
/*
js
py
java
cpp
ruby
*/

function print(item) {
    console.log(item)
}
coding.forEach(print) // reference of function
// coding.forEach(print()) // no execution of function
/*
js
py
java
cpp
ruby
*/

// forEach(item, index, array)
coding.forEach((item, idx, arr) => {
    console.log(`Item : ${item}, Index : ${idx}, Array : ${arr}`);
})
/*
Item : js, Index : 0, Array: js,py,java,cpp,ruby
Item : py, Index : 1, Array: js,py,java,cpp,ruby
Item : java, Index : 2, Array: js,py,java,cpp,ruby
Item : cpp, Index : 3, Array: js,py,java,cpp,ruby
Item : ruby, Index : 4, Array: js,py,java,cpp,ruby
*/
/*
js 0 [ 'js', 'py', 'java', 'cpp', 'ruby' ]
py 1 [ 'js', 'py', 'java', 'cpp', 'ruby' ]
java 2 [ 'js', 'py', 'java', 'cpp', 'ruby' ]
cpp 3 [ 'js', 'py', 'java', 'cpp', 'ruby' ]
ruby 4 [ 'js', 'py', 'java', 'cpp', 'ruby' ]
*/

// [{}, {}, {}]
const myCoding = [
    {
        langName: "Javascript", 
        langFile: "js"
    },
    {
        langName: "Python", 
        langFile: "py"
    },
    {
        langName: "C++", 
        langFile: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item);
    console.log(item.langFile);
    // console.log(item["langFile"]);
})
/*
{ langName: 'Javascript', langFile: 'js' }
js
{ langName: 'Python', langFile: 'py' }
py
{ langName: 'C++', langFile: 'cpp' }
cpp
*/