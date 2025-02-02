const express = require('express');
const User = require('../model/user'); // Ensure this path is correct
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());

// Get all users
router.get("/", async (req, res) => {
    const data = await User.find();
    res.send(data);
});

// Get user by ID
router.get("/:id", async (req, res) => {
    const data = await User.findOne({ _id: req.params.id });
    res.send(data);
});

// Delete a user
router.delete("/:id", async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.id });
    res.send(data);
});

// Create a new user
router.post("/post", async (req, res) => {
    const obj = new User({
        userID: req.body.userID,
        username: req.body.username,
        useremail: req.body.useremail,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        order: req.body.order
    });

    const data = await obj.save();
    res.send(data);
});

// Update user data
router.patch("/:id", async (req, res) => {
    let user = await User.findOne({ _id: req.params.id });

    user.userID = req.body.userID;
    user.username = req.body.username;
    user.useremail = req.body.useremail;
    user.password = req.body.password;
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.address = req.body.address;
    user.order = req.body.order;

    const data = await user.save();
    res.send(data);
});

module.exports = router;
