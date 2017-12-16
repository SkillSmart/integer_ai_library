module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send({status: "perfect start"});
    });

};