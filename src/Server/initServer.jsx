const mongoose = require("mongoose");
const express = require("express");
import dotenv from 'dotenv';
dotenv.config();

const atlasUrl = process.env.MONGO_URI;

// Function to initialize the server
const initServer = () => {
    mongoose.connect(atlasUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to DB Server");

            const app = express(); // Declare app globally

            // Import routes
            const productroute = require("../controller/productrouter");
            const userroute = require("../controller/userrouter");
            const orderroute = require("../controller/orderrouter");
            const cartroute = require("../controller/cartrouter");
            const reviewroute = require("../controller/reviewrouter");

            // Middleware for routes
            app.use("/product", productroute);
            app.use("/user", userroute);
            app.use("/order", orderroute);
            app.use("/cart", cartroute);
            app.use("/review", reviewroute);

            // Start server
            app.listen(process.env.PORT, () => {
                console.log("Server started on port 3000");
            });
        })
        .catch((err) => {
            console.error("Database connection failed:", err);
        });
};

// Export the function
module.exports = initServer;
