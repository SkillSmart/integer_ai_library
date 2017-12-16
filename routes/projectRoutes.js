const _ = require('lodash');
const Project = require('../models/Project');
const moment = require('moment');

const ALLOWED_VALUES = ['title', 'headline', 'situation', 'usecase', 'tags', 'stack', 'status', 'url', 'description', 'startDate', 'endDate']

module.exports = (app) => {

    // CREATE
    app.post('/api/reviews/projects', async (req, res) => {
        let projects;
        if (req.body.length) {
            //
            projects = req.body.map(project => {
                let body = _.pick(project, ALLOWED_VALUES);
                body.createdAt = moment().toString();
                return body;
            })
        } else {
            projects = {
                ..._.pick(req.body, ALLOWED_VALUES),
                createdAt: moment().toString()
            };
        }
        // Store the Projects to dB
        try {
            let response = await Project.create(projects);
            res.send(response);
        } catch (e) {
            res.status(422).send(e);
        }
    });

    // READ
    app.get('/api/reviews/projects', async (req, res) => {
        try {
            let projects = await Project.find({});
            res.send(projects);
        } catch (e) {
            res.status(404).send(e);
        }
    });
    app.get('/api/reviews/projects/:id', async (req, res) => {
        try {
            let project = await Project.findById(req.params.id);
            res.send(project);
        } catch (e) {
            res.status(400).send(e);
        }
    });

    // UPDATE
    app.patch('/api/reviews/projects/:id', async (req, res) => {
        let updates = _.pick(req.body, ALLOWED_VALUES);
        try {
            let updatedCourse = await Project.findByIdAndUpdate(req.params.id, updates, {new: true});
            res.send(updatedCourse);
        } catch (e) {
            res.status(422).send(e);
        }
    });

    // DELETE
    app.delete('/api/reviews/projects/', async (req, res) => {
        try {
            let response = await Project.remove({});
            res.send(response);
        } catch (e) {
            res.status(422).send(e);
        }
    });
    app.delete('/api/reviews/projects/:id', async (req, res) => {
        try {
            let response = await Project.findByIdAndRemove(req.params.id);
            res.send(response);
        } catch (e) {
            res.status(422).send(e);
        }
    });
};