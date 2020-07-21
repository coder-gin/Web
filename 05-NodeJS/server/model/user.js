const mongoose = require('mongoose');

const User = mongoose.model(
    'User',
    new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        nick_name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    })
);

module.exports = { User };
