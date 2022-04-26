# AWS API Gateway + Lambda + DynamoDB Example

For this task, two lambda functions were created:

### POST User

Function connected to POST method in API Gateway that accepts body with JSON object. Eg:

```json
{
    "name": "Norman",
    "age": 33
}
```

For this data new `user_id` is created (UUID) and then whole object is saved in `users` DynamoDB table.

Then the same UUID is returned as a response with `201` code.

This example endpoint is deployed under this link: POST `https://zv7ikm19zg.execute-api.us-east-1.amazonaws.com/test`

###  GET User

Function connected to GET method in API Gateway with dynamic path parameter `{user_id}`. This parameter is used to make `query` on Partition Key, and then returns found user object, or `404` code.

Example of user's object:

```json
{
    "user_id": "efd0fbb4-4ea2-47e0-b37f-eeece85e0a6x",
    "name": "Norman",
    "age": 33
}
```

This example endpoint is deployed under this link: GET `https://zv7ikm19zg.execute-api.us-east-1.amazonaws.com/test/{user_id}`
