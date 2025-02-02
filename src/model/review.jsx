const mongoose = require('mongoose');

const schema = mongoose.Schema({
    reviewID: String,
    userid: String,
    productID: String,
    rating: Number,
    comment: String,
    createAt: Date
})

module.exports = mongoose.model("Product", schema)