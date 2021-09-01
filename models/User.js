const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', UserSchema);