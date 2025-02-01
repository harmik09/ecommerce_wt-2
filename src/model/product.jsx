const mongoose = require('mongoose');

const schema = mongoose.Schema({
    productID: String,
    productName: Number,
    productDescripition: String,
    productPrice: Number,
    productImage: String,
    productCategory: String,
    productInventory: Number,
    productRating: Number,
    productReview: Array
})

module.exports = mongoose.model("Product", schema)