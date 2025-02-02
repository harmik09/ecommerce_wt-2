const express = require('express');
const bodyParser = require('body-parser');
const Cart = require('../model/cart'); // Ensure this file exists and exports the Mongoose model

const router = express.Router();

router.use(bodyParser.json());

// Get all cart items
router.get("/", async (req, res) => {
    const data = await Cart.find();
    res.send(data);
});

// Get cart by user ID
router.get("/:id", async (req, res) => {
    const data = await Cart.findOne({ _id: req.params.id });
    res.send(data);
});

// Delete cart by ID
router.delete("/:id", async (req, res) => {
    const data = await Cart.deleteOne({ _id: req.params.id });
    res.send(data);
});

// Insert (Create) a new cart
router.post("/post", async (req, res) => {
    const obj = new Cart({
        userID: req.body.userID,
        cartItem: req.body.cartItem
    });

    const data = await obj.save();
    res.send(data);
});

// Update cart by ID
router.patch("/:id", async (req, res) => {
    let cart = await Cart.findOne({ _id: req.params.id });

    cart.userID = req.body.userID;
    cart.cartItem = req.body.cartItem;

    const data = await cart.save();
    res.send(data);
});

module.exports = router;
