/*
Js is asynchronous lang. but its default behavior is synchronous.

Synchronous - code is executed line by line
Asynchronous - code is executed in multiple threads, and then all threads are merged together
Single-threaded - code is executed on one thread only.

Default JS - synchronous,  single-threaded
So, can we say JS is slow?
Yes, it is but you will never feel like that.
Because , Js engine alone is never obtained, it is obtained along with a runtime environment(eg - browser, node, deno), so all the complicacies associated with it is never felt.
-------------
Execution context - execute one line of code at a time.
Each operation waits for the previous one to complete before executing.
It is done via Call Stack, Heap Memory
--------------
2 Types of code is written in JS -
1) Blocking Code -> Block the flow of program -> Read file sync
2) Non-Blocking Code -> Do not block execution -> Read file async

Reading a file or collecting data from a file is a difficult task , various problems may arise.
In operating system, file can't read your program, i.e. to read the file, context is given to kernel,then kernel access the file or collect the data from the file, and then execeution context is given back to program, and this is how task of reading a file is accomplished. Hence, kernel don't wait, even program have to wait for kernel to perform task

Read File Sync - program execution will stop, file is readed, and then execution will continue.
Read File Async - program execution will be continued along with reading the file, and when file is read, it will notify.

So, it depends on the usecase which type of code (blocking or non-blocking) is suited for the program.
-------------
HOW IT IS DONE ?
Terms - 
JS engine (Memory heap, call stack), 
Web API[in browser](DOM[not available in Node], settimeout,setinterval,fetch())    OR Node [environment], 
Register CallBack, 
TaskQueue, 
High Priority Queue[for promises]

-> JS engine (alone js execution engine) is made up of call stack(global execution context is formed and functions are loaded one by one when a program is executed and then unloaded) and heap memory(memory allocations are done). First, a call of asynchronous code is made and transferred to Web API / Node API.
-> When we write asynchronous code(like setTimeOut, setInterval etc), we need a mechanism that reminds us to execute task after given time. That mechanism is done by - Web API/ Node API.
-> A call of setTimeOut or other asynchronous API transferred in WebAPI from callstack, is now registered in Register CallBack.
-> Register CallBack will transfer the tasks to task queue.
-> From the task queue, tasks are added to callStack in JS Engine from top.

-------------
Q:-
console.log(1)
setTimeOut(()=>{
    console.log(2)
},0)
console.log(3)

Output :-
1
3
2

*/