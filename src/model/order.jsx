const mongoose = require('mongoose');

const schema = mongoose.Schema({
    orederID: String,
    userid: String,
    orederDate: Date,
    status: String,
    totalPrice: Number,
    shippingAddress: Object,
    billingAddress: Object,
    orderItem: Array
})

module.exports = mongoose.model("Order", schema)