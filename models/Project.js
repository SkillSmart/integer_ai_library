const mongoose = require('mongoose');
const {Schema} = mongoose;
const moment = require('moment');

const ProjectSchema = new Schema({
    title: String,
    slug: String,
    headline: String,
    situation: String,
    usecase: String,
    tags: [String],
    stack: [String],
    status: String,
    url: String,
    description: String,
    startDate: Date,
    endDate: Date,
    createdAt: Date
});

// Lifecycle Hooks
ProjectSchema.pre('save', function (next) {
    if(!this.slug) {
        this.slug = this.title.replace(/ /g, '-').toLowerCase();
    }
    next();
});



module.exports = mongoose.model('project', ProjectSchema);