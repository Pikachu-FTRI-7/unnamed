const path = require('path');
const Session = require('../models/sessionModel.js');

const sessionController = {};

sessionController.hasSession = (req, res, next) => {
  console.log('at sessionController.hasSession');
  console.log(req.cookies);
  Session.find({ cookieID: req.cookies.ssid }, (err, session) => {
    // if find throws error, render login page with error from mongo
    if (err) {
      return res.render('login', { error: null });
    }
    // if no session is found for cookieID
    else if (session.length === 0) {
      res.render('login', { error: 'You are not logged in' });
    }
    return next();
  });
};

sessionController.startSession = (req, res, next) => {
  console.log('at startSession controller');
  console.log('at sessionController.startSesssion');
  const cookieID = res.locals.userID || req.cookies.ssid;
  Session.create({ cookieID: cookieID }, (err, session) => {
    if (err) {
      return next({
        log: 'Error in sessionController.startSession',
        status: 400,
        message: { error: 'An error occured' },
      });
    } else {
      return next();
    }
  });
  next();
};

module.exports = sessionController;
