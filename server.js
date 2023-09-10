const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("alo alo alo alo");
});

app.listen(process.env.PORT || 5001, () => {
  console.log(process.env.PORT);
  console.log("Server is running ");
});
