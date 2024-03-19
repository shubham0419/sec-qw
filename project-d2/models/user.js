const mongoose = require('mongoose');

const User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    admin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("User", User);