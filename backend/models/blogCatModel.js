const mongoose = require('mongoose');

const blogCatSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('BlogCategory', blogCatSchema);
