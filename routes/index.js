module.exports = function (app) {

    require('./authRoutes')(app);
    require('./courseRoutes')(app);

};