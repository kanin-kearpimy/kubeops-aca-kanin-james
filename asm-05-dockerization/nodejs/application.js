const express = require("express");
const application = express();

application.get("/", (_, response) =>
  response.send("Hi this is response from /")
);

application.listen(80, () => console.log("===> Server is started!"));
