const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
    },
    otpHash: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        expires: 3600, // 3600 seconds aka 1 hour, will reduce it during deployment
        default: Date.now(),
    }
});

module.exports = mongoose.model("OTP", otpSchema);