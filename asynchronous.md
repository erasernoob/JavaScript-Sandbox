## Js is the synchronous by default.
Promise -> MicroTask Queue
CallBack(Set Timeout) -> task Queue
 ### The 'this' for the xhr problem
 > If you want to avoid using this, you can use an arrow function. Arrow functions do not bind their own this; instead, they inherit this from the surrounding lexical scope. You can explicitly bind xhr like this:
Here, you directly reference xhr instead of relying on this. Both approaches are valid, and which one to use depends on your coding style preference.


 ```js
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        div.innerHTML = `<p>${data.value}</p>`;
    }
};
 ```
## Promise
To sovle the Callback hell(can't the approprite order of the result)
### Promise Chain
- `resolve(user1)`  pass the user1 to the next `then(user)`
- then(user1) => return user2 pass the user2 to the next then(user)
- then(user2)  and so on...
- **the catch() only works for the it's above `then()` the `then()` under it will exexcute normally**

## fetch 
Under the fetch hood, is the **Promise**.

## Module & Tooling
### Module Bundler
> Is a toll that takes all of the source code, multiple files and bundlers them together to single build Files like `bundle.js`
- plugins
- loaders (css.loader)
It is the those framwork use under the hood
- import the css loader
```
npm i -D css-loader style-loader
```
- install the html-plugin
`npm i -D html-webpack-plugin`
- install the webpack-dev-server to hot load
- install the bubble to transpile the modern JS to much older version JS to be compatible with the older browser 


### ES module & commonjs SYNTAX
- ES module (will not allowed to use in the node environment ~~need additional configuration~~) only works in front end 
- common js (will allowed to use in the backend environment)
## Node.js
USE NPM need to install the node.js
Node is a javaScript runtime environment RUN ON THE SERVER SIDE.
There is node Window or Document in Node.
Node use the V8 engine.

- npm i -D nodemon # as the devDependency(development environment)





