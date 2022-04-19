const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const PORT = 8888;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

// serve all static files
app.use(express.static(path.resolve(__dirname, "../build")));

// serve html to the home page
app.get("/", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "../index.html"))
);

// handle unknown routes
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 404,
    message: { error: "An error occurred" },
  };
  const errorObj = Object.assign({}, defualtErr, err);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
