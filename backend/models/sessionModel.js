const mongoose = require('mongoose');

const bookSessionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        timeSlot: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: 'Requested',
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('BookSession', bookSessionSchema);
