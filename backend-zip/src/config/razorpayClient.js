require('dotenv').config(); // Load environment variables from .env file

const Razorpay = require('razorpay');

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
});

module.exports = razorpay;
