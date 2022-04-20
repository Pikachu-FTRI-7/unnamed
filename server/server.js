const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = 8888;
const app = express();
const authController = require('./controllers/authController.js');
const sessionController = require('./controllers/sessionController.js');
const cookieController = require('./controllers/cookieController.js');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// serve all static files if there is a session
app.use(
  '/home',
  sessionController.hasSession,
  express.static(path.resolve(__dirname, '../build'))
);

app.get('/', (req, res) => {
  console.log("at get '/' route");
  res.render('login', { error: null });
});

// app.get('/home', (req, res) => {
//   console.log('at /home route');
//   app.use(express.static(path.resolve(__dirname, '../build')));
//   //return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
// });

app.get(
  '/signup',
  (req, res) => res.render('signup', { error: null })
  //res.status(200).sendFile(path.join(__dirname, '../client/signup.ejs'))
);

app.post(
  '/signup',
  authController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    return res.redirect('/home');
  }
);
// creates user in db and returns user object with userID
// set userID on response object and move to startSession middleware
// startSession controller uses userID on response object to create session(withID) in db
// setCookie controller will attach sessionID to response and send back to user

app.post(
  '/login',
  authController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    return res.redirect('/home');
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
    log: 'Express error handler caught unknown middleware error',
    status: 404,
    message: { error: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
