const db = require('../config/db_config.js')
const moment = require('moment')
const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: String,
    dob: {
        type: String,
        required: true
    },
    createdAt: String
});

module.exports = mongoose.model("customer", customerSchema)