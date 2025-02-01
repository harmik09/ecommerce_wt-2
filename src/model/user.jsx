const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userID: String,
    username: String,
    useremail: String,
    password: String,
    firstname: String,
    lastname: String,
    address: Object,
    order: Array
})

module.exports = mongoose.model("User", schema)