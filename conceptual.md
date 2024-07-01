### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript? One way is to use async and await in which a function will not eicute until a promise is returned. Asynchronous can also be managed used cal back function. 

- What is a Promise? A promise used for asynchronous exicution of JS functions. The three states of a promise is either resolved, pending or rejected. 

- What are the differences between an async function and a regular function? Async functions return a promise and can be used again using the keyword then or if using the keyword await, async functions can pause until the promise is resolved. Regular js function exicute imediately. 

- What is the difference between Node.js and Express.js? Express.js is a lightweight framework similar to Flask, which allows JavaScript to create dynamic webpages, apps, and APIs. Node.js is a runtime environment that allows you to run JavaScript on the server side, and Express.js is built on top of Node.js to simplify web application development.

- What is the error-first callback pattern? Error first functions are used in asynchronous programming where the error parameter comes first and is checked to handle any errors that occur. 

- What is middleware?  Middleware is a function that operates between the request and response in an Express application, allowing access to and modification of the request and response objects. 

- What does the `next` function do? the next function calls the "next" middleware function which has the matching "next" parameter. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc) 

The return nameing order does not match the order of the requests. The requests are in sequence and wait for the previous to finich before fetching, whic could take a long time if there are many urls.  It is possible to rewrite the code ti fetch all endpoints simultaniously with Promise.all.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
