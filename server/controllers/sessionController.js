const path = require('path');
const Session = require('../models/sessionModel.js');

const sessionController = {};

sessionController.hasSession = (req, res, next) => {
  console.log('at sessionController.hasSession');
  Session.find({ cookieID: req.cookies.ssid }, (err, session) => {
    // if find throws error, render login page with error from mongo
    if (err) {
      return res.render(path.join(__dirname, '../../client/login.ejs'), {
        error: err,
      });
    }
    // if no session is found for cookieID
    else if (!session) {
      return res.render(path.join(__dirname, '../../client/login.ejs'), {
        error: 'You are not logged in',
      });
    }
    return next();
  });
};

sessionController.startSession = (req, res, next) => {
  console.log('at sessionController.startSesssion');
  const cookieID = res.locals.user._id || req.cookies.ssid;
  const createAt = Date.now();

  if (!cookieID)
    return next({ log: 'Missing cookieID in sessionController.startSession' });

  Session.create(
    { cookieID: cookieID, createdAt: createAt },
    (err, session) => {
      if (err) {
        return next({
          log: 'Error in sessionController.startSession',
          status: 400,
          message: { error: 'An error occured' },
        });
      } else {
        res.locals.session = session;
        return next();
      }
    }
  );
  next();
};

module.exports = sessionController;
