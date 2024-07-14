const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
    moduleName: {
        type: String
    },
    lessons: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Lessons"
        }
    ]
});

module.exports = mongoose.model("Module", moduleSchema);