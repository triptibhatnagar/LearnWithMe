fetch('https://api.github.com/users/triptibhatnagar').then((response) => {//data to be received
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})

// it was available in browser
// when fetch natively come in nodejs => happiness
// https://blog.logrocket.com/fetch-api-node-js/
/*
---------------------BACKSTORY---------------------
Internet Explorer 5 changed this in 1998 with the introduction of the XMLHttpRequest API. Initially, XMLHttpRequest was designed to fetch XML data via HTTP, hence the name. Sometime after it was released, however, support for other data formats — primarily JSON, HTML, and plaintext — was added.

The XMLHttpRequest API worked like a charm back then, but as the web grew, it became so difficult to work with that JavaScript frameworks (notably jQuery) had to abstract it to make implementation easier and success/error handling smoother. 
browser’s Fetch API implementation is dependent on a browser-based Web Streams API and the AbortController interface (for aborting fetch requests), which wasn’t available in Node until recently. As such, it was difficult to choose the best approach to include it in the Node core.

---------------------WHAT IS FETCH()---------------------
global fetch() method starts the process of fetching a resource from the network
it is network based request
returns Promise

Q - when https errors like 404 arise, is it a part of reject or resolve?
A - it is a part of resolve, error means that request is not made by browser
A fetch() promise only rejects when a network error is encountered(which is usually when there's a permissoins issue or similar). A fetch() promise does not reject on HTTP errors(404, etc). Instead, a then() handler must check the Response.ok and/or Response.status properties.
*/

// SEND DATA ALONG WITH FETCH
const headers = {
    'Content-Type' : 'text/xml',
    'Breaking-Bad' : '<3',
};
fetch('https://example.com/', {headers})

/*
---------------------DIAGRAM TERMS--------------------- 
JS engine (Memory heap, call stack), 
Web API[in browser](DOM[not available in Node], settimeout,setinterval,fetch())    OR Node [environment], 
Register CallBack, 
TaskQueue, 
High Priority Queue[for promises]

---------------------FETCH---------------------
QUEUE FOR FETCH = MICRO TASK QUEUE / PRIORITY QUEUE / FETCH QUEUE
the callbacks in priority queue get into call stack first, before timeout or any other

FOR UNDERSTANDING :-
response = fetch('something')  [defined in global memory]

FETCH INTERNAL MECHANISM IS DIVIDED INTO 2 PARTS -
1) Data - one part of fetch to reserve space for data(variables..) in memory
onFulfilled[] - resolution of promise
onRejection[] - rejection of promise
can't push values inside these arrays, these(onFulfilled[], onRejection[], Data) are private fields
2) Web browser/Node based API - other part of fetch goes to access the web browser based API or handle node based request -> from here goes network request, you can't directly send network request, so you need a resource, this resource is given by either browser or node js, 
so we get NETWORK REQUEST, now either data will go on network or not
jaake kuch b response aya h => ONFULFILLED[]
request jaa hee ni payi or no response occurs => ONREJECTION[]
MOST IMPORTANT : errors like 404 occurs when request goes on network, and then you get to know that error occured, then data is counted in onfulfilled[]

Data gets reserved in memory
initially Data empty
when network request work is done, then either onFulfilled[] is fired or onRejection[] is fired
onFulfilled[function], onRejection[function] => these functions are responsible to fulfil data
once the data gets fulfilled, then data will fulfil response variable
response variable is available in global memory

AT ALL
when you write a respnse, you get Data, which is not directly accessible to you
*/