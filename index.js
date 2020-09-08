const express = require("express");
const HttpStatus = require("http-status-codes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 30010;
const URL_DATABASE = "mongodb://localhost/CRMdb";

const routes = require("./src/routes/crmRoutes");

//connection mongoose
mongoose.Promise = global.Promise;
mongoose.connect(URL_DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.listen(PORT, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${PORT}`);
});

app.use(function (req, res, next) {
  console.log(
    `URL resquest: ${req.originalUrl} | Type resquest: ${req.method}`
  );
  next();
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res
    .status(HttpStatus.OK)
    .send(`server Node and Express is listening on ${PORT}`);
});

app.use(routes);
