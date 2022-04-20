const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const apiController = {};

apiController.getMap = (req, res, next) => {
    console.log('hi from api controller');
    const urlTemplate = req.body.url;
    console.log(urlTemplate);
    fetch(urlTemplate)
        .then((response) => response.json())
        .then((response) => {
            console.log(response.routes[0].legs[0].distance.text);
            res.locals.distance = response.routes[0].legs[0].distance.text
        })
        .catch((error) => next({
            log: 'Error in apiController.getMap',
            status: 400,
            message: `Error ${error}`
        }));

    return next();
};

module.exports = apiController;