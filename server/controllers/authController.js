const path = require('path');
const User = require('../models/userModel.js');

const authController = {};

authController.createUser = (req, res, next) => {
  console.log('at createUser middleware');
  console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password)
    return next({
      error: 'Missing username or password while creating user',
    });
  else {
    console.log('creating user');
    User.create({ username: username, password: password }, (err, user) => {
      if (err) {
        return next({
          log: 'Error in authontroller.createUser',
          status: 400,
          message: {
            error: 'An error occured while creating the user in Mongo DB',
          },
        });
      } else {
        res.locals.user = user;
        res.locals.userID = user._doc._id;
        return next();
      }
    });
  }
};

authController.verifyUser = (req, res, next) => {
  console.log('at verify user controller');
  const { username, password } = req.body;
  console.log('VERIFYING', username, password);
  if (!username || !password)
    return next({
      log: 'Missing username or password while logging in',
    });
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      return next({
        log: 'Error in authontroller.verifyUser',
        status: 400,
        message: {
          error: 'An error occured while finding user in Mongo DB',
        },
      });
    } else if (!user) {
      // redirect user to signup page if user doesn't exist
      res.redirect('/signup');
    }
    // if user valid
    else {
      if (user.password !== password) {
        //if password incorrect, redirect to login page
        res.render('login', { error: 'incorrect password' });
      } else {
        res.locals.user = user;
        res.locals.userID = user._doc._id;
        return next();
      }
    }
  });
};

module.exports = authController;
