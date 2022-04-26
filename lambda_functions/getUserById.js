const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const user_id = event.pathParameters.user_id;
  let user = {};

  try {
    user = await db
      .get({
        TableName: "users",
        Key: {
          user_id,
        },
      })
      .promise();
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: err.message,
      }),
    };
  }

  if (!user.Item || !user.Item.user_id) {
    return {
      statusCode: 404,
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(user.Item),
  };
};
