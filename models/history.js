const db = require('../config/db_config.js')
const moment = require('moment')
const mongoose = require('mongoose')

const transferHistory = new mongoose.Schema({
    senderAccId: {
        type: String,
        required: true
    },
    receiverAccId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    transactionAt: String
});

module.exports = mongoose.model("transferHistory", transferHistory)