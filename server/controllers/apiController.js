const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const apiController = {};

apiController.getMap = (req, res, next) => {
    console.log('hi from api controller');
    const url = req.body.fetchUrl;
    console.log("request body", req.body.fetchUrl);
    fetch(url)
        .then((response) => response.json())
        .then((response) => {
            console.log('distance', response.routes[0].legs[0].distance.text);
            res.locals.distance = response.routes[0].legs[0].distance.text
            return next();
        })
        .catch((error) => next({
            log: 'Error in apiController.getMap',
            status: 400,
            message: `Error ${error}`
        }));
    // console.log("apiContoller distance", res.locals.distance);
};

module.exports = apiController;