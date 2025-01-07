/*
--------------- JAVASCRIPT ASYNC CODE ---------------
--------------- DEFAULT JAVASCRIPT BEHAVIOUR ---------------
JS - synchronous (one code executed at a time)
, single threaded (code executed in one thread)
If it is single threaded, it may be slow but it does not make it feel like that.
Only Javascript Engine is not available, it is available along with runtime environment(which can be of browser, nodejs, etc..)

--------------- EXECUTION CONTEXT (ALREADY DONE) ---------------
execute one line of code at a time
console.log(1)
console.log(2)
Each operation waits for the last one to complete before executing
CALL STACK, MEMORY HEAP

--------------- BLOCKING CODE V/S NON-BLOCKING CODE ---------------
BLOCKING CODE :- block the fow of program, read file sync
NON-BLOCKING CODE :- does not block execution, read file async
*/