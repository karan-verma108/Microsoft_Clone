const mongoose = require('mongoose')

// This is how the data will look like 
let userSchema = new mongoose.Schema({
    name : String,
    email : String, 
    password : String,
    phone : Number,
    role : String
})

// This is "User" is the collection name, userSchema is how it will look like 
mongoose.model('User', userSchema)
module.exports = mongoose.model('User')