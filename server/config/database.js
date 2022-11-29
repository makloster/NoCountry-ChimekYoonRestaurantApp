const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

const dbURL = process.env.DATABASE_URI

const connectDB = () => {
  const db = mongoose.connection
  mongoose.connect(dbURL)
  db.once('open', () => console.log('Connected to Mongoose on: ' + dbURL))
  db.on('error', error => console.error(error))
}

module.exports = { connectDB }
