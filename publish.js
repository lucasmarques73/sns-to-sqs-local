const AWS = require("aws-sdk");
AWS.config.loadFromPath("./config/aws.json");

const sns = new AWS.SNS({
  endpoint: "http://localhost:9911",
});

const params = {
  Message: "message",
  TopicArn: "arn:aws:sns:us-east-1:1465414804035:test1",
};

sns
  .publish(params)
  .promise()
  .then(() => {
    console.log("publish message");
  })
  .catch((error) => {
    console.log(JSON.stringify({ error }, null, 2));
  });
