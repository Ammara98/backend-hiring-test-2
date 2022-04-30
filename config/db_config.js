const mongoose = require('mongoose')
MONGODB_URL = process.env.MONGODB_URL

mongoose.connect(MONGODB_URL)
const db = mongoose.connection
db.on('error', (error)=> console.log('error'))
db.once('open', ()=> console.log('connected'))

module.exports = db;