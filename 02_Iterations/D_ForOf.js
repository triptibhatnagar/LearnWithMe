// for of
// obj, array, string are iterable
// for (const iterator of object) { 
    
// }
// object - loop applied on which object
// iterator - variable

// these loops are array or obj specific

// common syntax
// ["", "", ""]
// [{}, {}, {}]

//ARRAY
const arr = [3, 6, 9, 12, 15]
for (const num of arr) {
    console.log(num)
}
/*
3
6
9
12
15
*/

//STRING
const str = "Hello World"
for (const ch of str) {
    if (ch == " ") {
        continue;
    }
    console.log(ch)
}
/*
H
e
l
l
o
W
o
r
l
d
*/

// MAP
/*
 * The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
 * Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.
 * A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).
 */
const map = new Map()
map.set('+91',"India")
map.set('+01',"USA")
map.set('+33',"France")
map.set('+46', "Sweden")
map.set('+07',"Russia")
map.set('+33',"France")
//France will not be repeated in map

console.log(map);
/*
Map(5) {
  '+91' => 'India',
  '+01' => 'USA',
  '+33' => 'France',
  '+46' => 'Sweden',
  '+07' => 'Russia'
}
*/

for (const key of map) {
    console.log(key)
}
/*
[ '+91', 'India' ]
[ '+01', 'USA' ]
[ '+33', 'France' ]
[ '+46', 'Sweden' ]
[ '+07', 'Russia' ]
*/

for (const [key, value] of map) {// destructuring of array
    console.log(`Key: ${key}    value: ${value}`)
}
/*
Key: +91    value: India
Key: +01    value: USA
Key: +33    value: France
Key: +46    value: Sweden
Key: +07    value: Russia
*/

// OBJECT
const obj = {
    'game1' : "BGMI",
    'game2' : "Sonic Jump",
    'game3' : "Candy Crush"
}
// for (const [key, value] of obj) {// TypeError: obj is not iterable
//     console.log(`Key: ${key}    value: ${value}`)
// }
// for(const key of obj) {// TypeError: obj is not iterable
//     console.log(key)
// }