const path = require("path");
const Session = require("../models/sessionModel.js");

const sessionController = {};

sessionController.hasSession = (req, res, next) => {
  Session.find({ cookieId: req.cookies.ssid }, (err, session) => {
    if (err) {
      res.redirect("/login");
    }
  });
  next();
};

sessionController.startSession = (req, res, next) => {
  const cookieID = res.locals.user._id;
  const createAt = Date.now();

  if (!cookieID)
    return next({ log: "Missing cookieID in sessionController.startSession" });

  Session.create({ cookieID: cookieID, createAt: createAt });
  next();
};

module.exports = sessionController;
