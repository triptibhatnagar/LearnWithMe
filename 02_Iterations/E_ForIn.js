// OBJECT
const langs = {
    js : "Javascript",
    java : "Java",
    cpp : "C++",
    py : "Python"
}
for (const key in langs) {
    // for key
    console.log("Key: "+key);
    // for value
    console.log("Value: "+langs[key]);
    // console.log("Value: "+langs.key);// undefined
}
/*
js
java
cpp
py
*/
/*
Key: js
Value: Javascript
Key: java
Value: Java
Key: cpp
Value: C++
Key: py
Value: Python
*/

const progLang = ["js", "java", "cpp", "py"]
for (const key in progLang) {
    // console.log(key)
    console.log(progLang[key]);
}
/*
0
1
2
3
*/
/*
js
java
cpp
py
*/

const map = new Map()
map.set('+91',"India")
map.set('+01',"USA")
map.set('+33',"France")
map.set('+46', "Sweden")
map.set('+07',"Russia")
map.set('+33',"France")

for (const key in map) {
    console.log(key)// nothing is printed as maps are not iterable with forin
}

const str = "Hello World"
for (const ch in str) {
    // if (ch == " ") {
    //     continue;
    // }
    console.log(ch)
    console.log(str[ch])
}
/*
0
H
1
e
2
l
3
l
4
o
5

6
W
7
o
8
r
9
l
10
d
*/