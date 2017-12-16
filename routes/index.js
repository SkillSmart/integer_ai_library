module.exports = function (app) {

    require('./authRoutes')(app);
    require('./courseReviewRoutes')(app);

};