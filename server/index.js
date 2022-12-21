const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

app.listen(3001, () => {
  console.log("Server started at port 3001!");
});
