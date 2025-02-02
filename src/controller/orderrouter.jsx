const Order = require('../model/order');
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const orderMiddleWare = (req, res, next) => {
    next();
};

router.use('/', orderMiddleWare);
router.use(bodyParser.json());

// Get all orders
router.get("/", async (req, res) => {
    const data = await Order.find();
    res.send(data);
});

// Get order by ID
router.get("/:id", async (req, res) => {
    const data = await Order.findOne({ _id: req.params.id });
    res.send(data);
});

// Delete an order
router.delete("/:id", async (req, res) => {
    const data = await Order.deleteOne({ _id: req.params.id });
    res.send(data);
});

// Insert (Create) an order
router.post("/post", async (req, res) => {
    const obj = new Order({
        orderID: req.body.orderID,
        userid: req.body.userid,
        orderDate: req.body.orderDate, // Fixed typo from "orederDate"
        status: req.body.status,
        totalPrice: req.body.totalPrice,
        shippingAddress: req.body.shippingAddress,
        billingAddress: req.body.billingAddress,
        orderItem: req.body.orderItem
    });

    const data = await obj.save();
    res.send(data);
});

// Update an order
router.patch("/:id", async (req, res) => {
    let order = await Order.findOne({ _id: req.params.id });
    
    order.orderID = req.body.orderID;
    order.userid = req.body.userid;
    order.orderDate = req.body.orderDate;
    order.status = req.body.status;
    order.totalPrice = req.body.totalPrice;
    order.shippingAddress = req.body.shippingAddress;
    order.billingAddress = req.body.billingAddress;
    order.orderItem = req.body.orderItem;
    
    const data = await order.save();
    res.send(data);
});

module.exports = router;
