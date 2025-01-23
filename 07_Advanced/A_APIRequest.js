/*
------------------- API -------------------
API is talking language between two systems[ (backend and frontend) or (code written in Java and code written in JS) etc...]
Examples - 1)Github API - https://api.github.com/users/triptibhatnagar
           2)RandomUser.me API - https://randomuser.me/api/
Reading API is complex. Hence, we have some tools like JSON Formatter. It will format or beautify code and it is easier to understand API in tree structure.

------------------- How to request API ? -------------------
new way -> fetch
old way -> XMLHttpRequest

------------------- XMLHttpRequest -------------------
XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.
It is heavily used in AJAX programming. AJAX(Asynchronous Javascript And XML) is not a technology,but an approach to use a number of technologies -> HTML/XHTML, CSS, JS, DOM, XML, and most importantly XMLHttpRequest.

It has a state for everything. Let's see XMLHttpRequest:readyState
Value	State	            Description
0	    UNSENT	            Client has been created. open() not called yet.
1	    OPENED	            open() has been called.
2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	    LOADING	            Downloading; responseText holds partial data.
4	    DONE	            The operation is complete.
*/


// firstly, object is made.
// XMLHttpRequest() is a method which contains all the states, and through it, you can send or receive Request, now make an object from it.
const xhr = new XMLHttpRequest()
const reqUrl = 'https://api.github.com/users/triptibhatnagar'
xhr.open('GET',reqUrl)
// open() will send the request
// 2 parameters - type of request, api url string
// open is not yet called, for calling => xhr.send() is used

// to track it
// console.log('HERE')

//to track continuosly
xhr.onreadystatechange = function() {
    console.log(xhr.readyState) // Returns client's state
    // 2, 3, 4
    //to detect state
    if(xhr.readyState === 4) {// a response is generated after 4
        //to check for data
        const data = this.responseText;
        // console.log(data.followers); //undefined
        console.log(typeof data); //string
        console.log(data)
        /*
        {
  "login": "triptibhatnagar",
  "id": 144587779,
  "node_id": "U_kgDOCJ48Aw",
  "avatar_url": "https://avatars.githubusercontent.com/u/144587779?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/triptibhatnagar",
  "html_url": "https://github.com/triptibhatnagar",
  "followers_url": "https://api.github.com/users/triptibhatnagar/followers",
  "following_url": "https://api.github.com/users/triptibhatnagar/following{/other_user}",
  "gists_url": "https://api.github.com/users/triptibhatnagar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/triptibhatnagar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/triptibhatnagar/subscriptions",
  "organizations_url": "https://api.github.com/users/triptibhatnagar/orgs",
  "repos_url": "https://api.github.com/users/triptibhatnagar/repos",
  "events_url": "https://api.github.com/users/triptibhatnagar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/triptibhatnagar/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Tripti Bhatnagar ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "👋 Front End Developer passionate about creating engaging user experiences 💻✨| Eager to learn and contribute to web development community 🚀🌟",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2023-09-10T08:14:17Z",
  "updated_at": "2024-12-29T16:36:41Z"
}
        */
        const dataJson = JSON.parse(this.responseText); // string to json
        console.log(typeof dataJson); //object
        console.log(dataJson);
        console.log(dataJson.followers);
    }
}
xhr.send()

//as soon as the state changes, the function gets executed. Therefore, it is called as asynchronous program because some mechanism is telling to do some work and go in callback.


//------------------- CONSOLE -------------------
/*
console is not found anywhere in the standardization or guidelines of Javascript.
console and many other APIS like document are not a part of core Javascript.
console.log is basically a debugging tool, it's a dev tool of browser.
Actually the runtime of JS injects it.
As we know, JS run by some runtime environments like nodeJs.
NodeJs is an implementation of V8 engine.
There are many engines which are used to run JS. One of them is V8 engine.
V8  engine whole code is written in c++.
So JS is actually run by c++.
V8 engine gives access to various debugging tools and APIs. From here, we get the access to console.log

There is a folder of d8 in V8 engine source code.
Inside it, we found d8-console.cc and d8-console.h
d8-console.cc is actually console.log

void D8Console::Log(const debug::ConsoleCallArguments& args,
                    const v8::debug::ConsoleContext&) {
    WriteToFile(nullptr, stdout, isolate_, args);
}

and many more...
*/