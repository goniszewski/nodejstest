# NodeJS Candidate Test

## Basic knowledge questions

- What are Promises in Node.js?
  - _It's a function that can be resolved or rejected with the use of callbacks._

- What is callback hell?
  - _We're dealing with so called 'callback hell' when there's multiple promise functions nested in each other, and we heave to pass down and deal with all their callbacks._

- What tools can be used to assure consistent style?
  - _Eg Prettier, Eslint, Beautify._

- What is REPL? What purpose it is used for?
  - _It's a simple programming enviroment that is implemented in some languages (Bash, Python, Node). It can be used for simple operations, running tests or debugging._

- What is the difference between Asynchronous and Non-blocking?
  - _Async code gives you a Promise which you can await, and get for eg some data fetched from API. Non-blocking code when is executed doesn't block the execution loop of application, and is eventually executed without returning any response._

- List types of Http requests supported by Node.js?
  - _GET, POST, PATCH, PUT, DELETE, HEAD, COPY, OPTIONS_

- Is Node.js entirely based on a single-thread?
  - _No, event-driven async operations are handled by multi-threaded libuv module utilized by Node.js_

- What is your favourite HTTP framework and why? 
  - _My favorite framework is Nestjs because it is well thought and structured, promotes best practices, comes with vast support for most common uses (integrated Multer, ORM, middlewares) and is fully written in TypeScript._

- What is difference between JavaScript and Node.js?
  - _JS is a programming language when Node.js is a JS runtime enviroment (which uses V8 engine to run JS on server). Some global variables, like __document__ or __window__ can be only used in JS running in browser, while for eg __process__ is used only in Node_

- What is TypeScript? Do you use it? Why / why not?
  - _TS is a superset of JS that runs on Node.js and provides support for strong typechecking_

- What are the key differences between regular and arrow functions?
  - _Arrow functions doesn't have their own __this__, they canot be used as constructors, and they can use implicit return feature when used as one-liner (without curly braces)_

- What is destructuring?
  - _Destructuring is a process of isolating objects/values from objects and arrays. Examples:_
  ```js
  const [val1, val2] = ["val1", "val2"];
  const {val1, val2} = {val1: "val1", val2: "val2"};
  ```

- Explain the difference:
```ts
const a: string = "hello";
const a = "hello" as string;
```
  - _First one provides type for a variable, and second one overrites it_

## Problem solving

You get an error report from testing crew - User API doesn't return "Test User" data for ID: 1.
Code is in this repository.

**Find out why, fix it and write report on why did it happen.**

## Create something whilst learning something new

For this task you will need your personal account in AWS. Please create one if you don't have it yet (do not worry about costs, everything you do here will covered by AWS Free Tier).

- Create a REST API in AWS API Gateway.
- Create 2 HTTP methods in the API: GET & POST.
- Create a DynamoDB Table (keep provisioned WCU & RCU low to stay within Free Tier, 2 will be OK) and name it "users". It should consist only of a parition key (hash key) which is "user_id".
- Create a lambda function and integrate it with the API POST method. In the JSON body of HTTP POST request, user should be able to specify his first name and age. Lambda should take provided body and insert it into your DynamoDB table as a new item. Value for user_id column should be generated as a random GUID and returned to the caller in the response.
- Create second lambda function and integrate it with the API GET method. GET method should take a user_id as path parameter. Lambda should lookup the DynamoDB table (using **query** method!) and either return user or 404 status code if it doesn't exist.

Please create a new GitLab/GitHub repository, upload your lambda code in there and share link to the repo with us.
Repository should also contain a README.md with URLs to your API GET & POST methods and explanation about how to use them (exact paths, example body for POST method).
