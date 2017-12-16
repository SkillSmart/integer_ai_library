const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    slug: {
        type: String
    },
    headline: String,
    summary: String,
    institution: String,
    teacher: String,
    stats: {
        noModules: Number,
        noLessons: Number,
        noProjects: Number,
        duration: String
    },
    meta: {
        rank: Number,
        favs: Number,
    }
});


CourseSchema.pre('save', function(next) {
    // Create  a slug from the title if none is given
    if (!this.slug) {
        try {
            this.slug = this.title.replace(/ /g, '-').toLowerCase();
        } catch (e) {
            console.log(e);
        }
    }
    next();
})

module.exports = mongoose.model('course', CourseSchema);