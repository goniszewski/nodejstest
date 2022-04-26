const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const user_id = AWS.util.uuid.v4();
  const body = JSON.parse(event.body);

  try {
    await db
      .put({
        TableName: "users",
        Item: {
          user_id,
          name: body.name,
          age: body.age,
        },
      })
      .promise();
  } catch (err) {
    console.error(err);
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: err.message,
      }),
    };
  }

  return {
    statusCode: 201,
    body: JSON.stringify(user_id),
  };
};
