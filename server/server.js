const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const PORT = 8888;
const app = express();
const authController = require("./controllers/authController.js");
const sessionController = require("./controllers/sessionController.js");
const cookieController = require("./controllers/cookieController.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// serve all static files
app.use(express.static(path.resolve(__dirname, "../build")));

// need to create separate html file for sign-up/ login page
// possibly user session controller here to alter redirect flow
app.get("/", sessionController.hasSession, (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "../sign-up.html"))
);

app.get("/home", sessionController.hasSession, (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "../index.html"))
);

app.get("/signup", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "../sign-up.html"))
);

app.post(
  "/signup",
  authController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    return res.redirect("/home");
  }
);
// creates user in db and returns user object with userID
// set userID on response object and move to startSession middleware
// startSession controller uses userID on response object to create session(withID) in db
// setCookie controller will attach sessionID to response and send back to user

app.post(
  "/login",
  authController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    return res.redirect("/home");
  }
);
// attempts to fetch a user by sending request to authController
// if verified:
// set userID on response object and move to startSession middleware
// startSession controller uses userID on response object to create session(withID) in db
// setCookie controller will attach sessionID to response and send back to use
// authentication endpoint

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
