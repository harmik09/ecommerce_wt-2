const express = require('express');
const bodyParser = require('body-parser');
const Review = require('../model/review'); // Assuming this file exports the Mongoose model

const router = express.Router();

router.use(bodyParser.json());

// Get all reviews
router.get("/", async (req, res) => {
    const data = await Review.find();
    res.send(data);
});

// Get review by review ID
router.get("/:id", async (req, res) => {
    const data = await Review.findOne({ reviewID: req.params.id });
    res.send(data);
});

// Delete review by review ID
router.delete("/:id", async (req, res) => {
    const data = await Review.deleteOne({ reviewID: req.params.id });
    res.send(data);
});

// Insert (Create) a new review
router.post("/post", async (req, res) => {
    const obj = new Review({
        reviewID: req.body.reviewID,
        userid: req.body.userid,
        productID: req.body.productID,
        rating: req.body.rating,
        comment: req.body.comment,
        createAt: new Date()  // Set the current date when the review is created
    });

    const data = await obj.save();
    res.send(data);
});

// Update review by review ID
router.patch("/:id", async (req, res) => {
    let review = await Review.findOne({ reviewID: req.params.id });

    review.userid = req.body.userid;
    review.productID = req.body.productID;
    review.rating = req.body.rating;
    review.comment = req.body.comment;

    const data = await review.save();
    res.send(data);
});

module.exports = router;
