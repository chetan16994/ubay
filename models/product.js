"use strict";

const mongoose = require("mongoose"),
    { Schema } = mongoose,
    productSchema = new Schema(
        {
            user_id_bid: {
                type: String,
                default: null
            },
            username_bid: {
                type: String,
                required: false,
                default: null
            },
            productName: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            imageUrl: {
                type: String,
                match: /^.*\.(jpg|JPG|png|PNG|jfif)$/,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            currentPrice: {
                type: Number,
            },
            category: {
                type: String,
                required: true
            },
            forBidding: {
                type: Boolean,
                required: true
            },
            isApproved: {
                type: Boolean,
                default: false
            },
            isRejected: {
                type: Boolean,
                default: false
            },
            isSold: {
                type: Boolean,
                default: false
            },
            isExpired: {
                type: Boolean,
                default: false
            },
            timeApproved: {
                type: Number,
            },
            expireTime: {
                type: Number,
            },
            remainingTime: {
                type: Number,
                requird: false
            },
        }
    )

module.exports = mongoose.model("Product", productSchema);
