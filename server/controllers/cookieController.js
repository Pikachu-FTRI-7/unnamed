const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  console.log('at setSSIDCookie controller');
  res.clearCookie('ssid');
  res.cookie('ssid', `${res.locals.userID}`, {
    httpOnly: true,
  });
  return next();
};

module.exports = cookieController;
