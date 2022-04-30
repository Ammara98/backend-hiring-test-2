const db = require('../config/db_config.js')
const Enum = require('enum')

const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    custId: {
        type: String,
        required: true
    },
    accountType:{
        type: String,
        enum: ['savings', 'current'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    //balance: Number,
    status: String,
    createdAt: String
});


module.exports = mongoose.model("Account", accountSchema)
