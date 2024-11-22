const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    comments:{
        type:String,
    }
})

module.exports = mongoose.model("Review", reviewSchema);