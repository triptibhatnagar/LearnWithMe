// 1 Arrays 
// Arrays (and Typed Arrays) are iterables over their elements:

for (const x of ['a', 'b']) {
    console.log(x);
}
// Output:
// 'a'
// 'b'


// 2 Strings 
// Strings are iterable, but they iterate over Unicode code points, each of which may comprise one or two JavaScript characters:

for (const x of 'a\uD83D\uDC0A') {
    console.log(x);
}
// Output:
// 'a'
// '\uD83D\uDC0A' (crocodile emoji)

// 3 Maps 
// Maps are iterables over their entries. Each entry is encoded as a [key, value] pair, an Array with two elements. The entries are always iterated over deterministically, in the same order in which they were added to the map.

const map = new Map().set('a', 1).set('b', 2);
for (const pair of map) {
    console.log(pair);
}
// Output:
// ['a', 1]
// ['b', 2]
// Note that WeakMaps are not iterable.

// 4 Sets 
// Sets are iterables over their elements (which are iterated over in the same order in which they were added to the Set).

const set = new Set().add('a').add('b');
for (const x of set) {
    console.log(x);
}
// Output:
// 'a'
// 'b'
// Note that WeakSets are not iterable.


// 5 arguments 
// Even though the special variable arguments is more or less obsolete in ECMAScript 6 (due to rest parameters), it is iterable:

function printArgs() {
    for (const x of arguments) {
        console.log(x);
    }
}
printArgs('a', 'b');

// Output:
// 'a'
// 'b'

// 6 Iterable computed data 
// Not all iterable content does have to come from data structures, it could also be computed on the fly. For example, all major ES6 data structures (Arrays, Typed Arrays, Maps, Sets) have three methods that return iterable objects:

// entries() returns an iterable over entries encoded as [key, value] Arrays. For Arrays, the values are the Array elements and the keys are their indices. For Sets, each key and value are the same – the Set element.
// keys() returns an iterable over the keys of the entries.
// values() returns an iterable over the values of the entries.
// Let’s see what that looks like. entries() gives you a nice way to get both Array elements and their indices:

const arr = ['a', 'b', 'c'];
for (const pair of arr.entries()) {
    console.log(pair);
}
// Output:
// [0, 'a']
// [1, 'b']
// [2, 'c'] 


// 7 Plain objects are not iterable 
// Plain objects (as created by object literals) are not iterable:

for (const x of {}) { // TypeError
    console.log(x);
}
// Why aren’t objects iterable over properties, by default? The reasoning is as follows. There are two levels at which you can iterate in JavaScript:

// The program level: iterating over properties means examining the structure of the program.
// The data level: iterating over a data structure means examining the data managed by the program.
// Making iteration over properties the default would mean mixing those levels, which would have two disadvantages:

// You can’t iterate over the properties of data structures.
// Once you iterate over the properties of an object, turning that object into a data structure would break your code.


// 8 How to iterate over properties 
// The proper (and safe) way to iterate over properties is via a tool function. For example, via objectEntries(), whose implementation is shown later (future ECMAScript versions may have something similar built in):

const obj = { first: 'Jane', last: 'Doe' };

for (const [key,value] of objectEntries(obj)) {
    console.log(`${key}: ${value}`);
}

// Output:
// first: Jane
// last: Doe