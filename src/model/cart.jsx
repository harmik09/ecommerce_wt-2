const mongoose = require('mongoose');

const schema = mongoose.Schema({
    userID: String,
    cartItem: Array
})

module.exports = mongoose.model("Cart", schema)