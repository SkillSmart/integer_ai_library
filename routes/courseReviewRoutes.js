const Course = require('../models/Course');
const _ = require('lodash');
const moment = require('moment');

const ALLOWED_ATTRIBUTES = [
    'title', 'institution',
    'teacher', 'headline', 'summary',
    'noModules', 'noLessons', 'duration'];

module.exports = (app) => {

    app.get('/api/reviews/courses', async (req, res) => {
        let courses = await Course.find({});
        if (!courses) res.status(422).send({ error: "Unable to retrieve the list of courses" });
        res.send(courses);
    });

    app.get('/api/reviews/courses/:id', async (req, res) => {
        let course = await Course.findById(req.params.id);

        if (!course) res.status(422).send({ error: "Unable to find the requested Object." });
        res.send(course);
    });

    // CREATE
    app.post('/api/reviews/courses', async (req, res) => {
        let courses;

        if (req.body.length) {
            courses = req.body.map(course => {
                let body = _.pick(course, ALLOWED_ATTRIBUTES);
                body.createdAt = moment().toString();
                return body;
            })
        } else {
            courses = {
                ..._.pick(req.body, ALLOWED_ATTRIBUTES),
                createdAt: moment().toString()
            };
        }
        // Select the data allowed to be posted

        try {
            let response = await Course.create(courses);
            res.send(response);
        } catch (error) {
            res.status(422).send(error);
        }
    });

    // UPDATE
    app.patch('/api/reviews/courses/:id', async (req, res) => {
        let body = _.pick(req.body, ALLOWED_ATTRIBUTES);
        try {
            let response = await Course.findOneAndUpdate({_id: req.params.id}, body, { new: true });
            res.send(response)
        } catch (e) {
            res.status(422).send(e)
        }
    });

    // DELETE
    app.delete('/api/reviews/courses', async (req, res) => {
        try {
            let response = await Course.remove({});
            res.send(response);
        } catch (e) {
            res.status(400).send(e)
        }
    });

    app.delete('/api/reviews/courses/:id', async (req, res) => {
        try {
            let response = await Course.findByIdAndRemove(req.params.id);
            res.send(response);
        } catch (e) {
            res.status(422).send(e)
        }
    })
}