// for loop
for (let i = 1; i <= 10; i++) {
    const element = i;
    // console.log(element);
}
// console.log(element);//ReferenceError: element is not 3
/*
1
2
3
4
5
6
7
8
9
10
*/

for (let i = 1; i <= 10; i++) {
    const element = i;
    // if(element == 5)
    //     console.log("Got 5");
    // console.log(element);
}
/*
1
2
3
4
Got 5
5
6
7
8
9
10
*/

for (let i = 1; i <= 3; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`   Inner loop value: ${j}`)
        // console.log(i+" * "+j+" = "+i*j);
    }
}
/*
Outer loop value: 1
   Inner loop value: 1
   Inner loop value: 2
   Inner loop value: 3
Outer loop value: 2
   Inner loop value: 1
   Inner loop value: 2
   Inner loop value: 3
Outer loop value: 3
   Inner loop value: 1
   Inner loop value: 2
   Inner loop value: 3
*/

/*
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
1 * 4 = 4
1 * 5 = 5
1 * 6 = 6
1 * 7 = 7
1 * 8 = 8
1 * 9 = 9
1 * 10 = 10
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
2 * 10 = 20
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
3 * 4 = 12
3 * 5 = 15
3 * 6 = 18
3 * 7 = 21
3 * 8 = 24
3 * 9 = 27
3 * 10 = 30
*/

// ITERATING OVER ARRAY 
// let arr = [6,9,3,4,1]
let arr = ["abc", "def", "ghi"]
for (let i = 0; i < arr.length; i++) {// if i <= arr.length -> undefined
   const element = arr[i];
   // console.log(element);
}
// console.log(arr.length);

// break, continue
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log("Detected 5");
        // break;// come outside of loop
    }
    // console.log(i);
}
/*
1
2
3
4
Detected 5
*/

// break in nested loops
// The control will come out of only that loop in which the break statement is used.
for (let i = 1; i <= 10; i++) {
    console.log("Outer loop - i: "+i);
    for (let j = 1; j <= i; j++) {
        if (j == 5) {
            console.log("Detected 5 in inner loop");
            break;// come outside of loop
        }
        console.log("   Inner loop - j: "+j);
    }
}
/*
Outer loop - i: 1
   Inner loop - j: 1
Outer loop - i: 2
   Inner loop - j: 1
   Inner loop - j: 2
Outer loop - i: 3
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
Outer loop - i: 4
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Outer loop - i: 5
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Detected 5 in inner loop
Outer loop - i: 6
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Detected 5 in inner loop
Outer loop - i: 7
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Detected 5 in inner loop
Outer loop - i: 8
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Detected 5 in inner loop
Outer loop - i: 9
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Detected 5 in inner loop
Outer loop - i: 10
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Detected 5 in inner loop
*/

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue;//skip one iteration
    }
    console.log(i);
}
/*
1
2
3
4
Detected 5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
*/

// continue in nested loops
// In nested loops, the ‘continue’ keyword operates on the innermost loop
for (let i = 1; i <= 10; i++) {
    console.log("Outer loop - i: "+i);
    for (let j = 1; j <= i; j++) {
        if (j == 5) {
            console.log("Detected 5 in inner loop");
            continue;// come outside of loop
        }
        console.log("   Inner loop - j: "+j);
    }
}
/*
Outer loop - i: 1
   Inner loop - j: 1
Outer loop - i: 2
   Inner loop - j: 1
   Inner loop - j: 2
Outer loop - i: 3
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
Outer loop - i: 4
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Outer loop - i: 5
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Detected 5 in inner loop
Outer loop - i: 6
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Detected 5 in inner loop
   Inner loop - j: 6
Outer loop - i: 7
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Detected 5 in inner loop
   Inner loop - j: 6
   Inner loop - j: 7
Outer loop - i: 8
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Detected 5 in inner loop
   Inner loop - j: 6
   Inner loop - j: 7
   Inner loop - j: 8
Outer loop - i: 9
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Detected 5 in inner loop
   Inner loop - j: 6
   Inner loop - j: 7
   Inner loop - j: 8
   Inner loop - j: 9
Outer loop - i: 10
   Inner loop - j: 1
   Inner loop - j: 2
   Inner loop - j: 3
   Inner loop - j: 4
Detected 5 in inner loop
   Inner loop - j: 6
   Inner loop - j: 7
   Inner loop - j: 8
   Inner loop - j: 9
   Inner loop - j: 10
*/

for (let i = 1; i <= 5; i++) {
    console.log("Outer loop: ");
    for (let j = 1; i <= 5; i++) {
        if (i == 5) {
            console.log("Detected 5");
            break;// come outside of loop
        }
        console.log(i);   
    }
}
/*
Outer loop:
1
2
3
4
Detected 5
*/