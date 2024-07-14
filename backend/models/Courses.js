const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    lessons: {
        type: Number,
        required: true
    },
    projects: {
        type: Number,
        required: true
    },
    courseProgress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseProgress"
    }
});

module.exports = mongoose.model("Courses", courseSchema);