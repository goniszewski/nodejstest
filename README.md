# NodeJS Candidate Test

## Basic knowledge questions

- What are Promises in Node.js?

- What is callback hell?

- What tools can be used to assure consistent style?

- What is REPL? What purpose it is used for?

- What is the difference between Asynchronous and Non-blocking?

- List types of Http requests supported by Node.js?

- Is Node.js entirely based on a single-thread?

- What is your favourite HTTP framework and why?

- What is difference between JavaScript and Node.js?

- What is TypeScript? Do you use it? Why / why not?

- What are the key differences between regular and arrow functions?

- What is destructuring?

- Explain the difference:
```ts
const a: string = "hello";
const a = "hello" as string;
```

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