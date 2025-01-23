fetch('https://api.github.com/users/triptibhatnagar').then((response) => {//data to be received
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})

// it was available in browser
// when fetch come in nodejs => happiness
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
    'C ontent-Type' : 'text/xml',
    'Breaking-Bad' : '<3',
};
fetch('https://example.com/', {headers})