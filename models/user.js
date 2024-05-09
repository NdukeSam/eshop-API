// import mongoose from 'mongoose';
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: String,
    image: String,
    numberInStock: {
        type: Number,
        required: true
    }
})

exports.User = mongoose.model('User', userSchema);