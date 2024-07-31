const mongoose = require('mongoose')

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' //hotels is the name of database in which we are working.

// MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection; //using this object, you will interact with the database
db.on('connected', () => {
    console.log('Connected to MongoDB server')
})

db.on('error', (err) => {
    console.log('Error in MongoDB server')
})

db.on('disconnected', () => {
    console.log('Disconnected to MongoDB server')
})

//export database connection
module.exports = db;