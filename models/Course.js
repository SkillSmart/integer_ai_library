const mongoose = require('mongoose');
const {Schema} = mongoose;

const CourseSchema = new Schema({
    title: String,
    slug: {
        type: String
    },
    headline: String,
    summary: String,
    institution: String,
    teacher: String,
    noModules: Number,
    noLessons: Number,
    noProjects: Number,
    duration: String
});


CourseSchema.pre('save', function (next){
    // Create  a slug from the title if none is given
    if(!this.slug) {
        this.slug = this.title.replace(' ', '-').toLowerCase();
    }
    next();
})

module.exports = mongoose.model('course', CourseSchema);