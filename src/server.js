const router = require("./router");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Config
app.use(cors("*"));
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`app running at http://localhost:${port}`);
});

module.exports = app;
