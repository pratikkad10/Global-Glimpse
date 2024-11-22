const mongoose = require("mongoose");
const Reviews = require("./reviews");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://images.unsplash.com/photo-1589419896452-b460b8b390a3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    set: (v) => v === "" ? "https://images.unsplash.com/photo-1589419896452-b460b8b390a3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  reviews:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Review"
    }
  ]
});

listingSchema.post("findOneAndDelete", async (listing)=>{
  if(listing){
    await Reviews.deleteMany({_id : {$in:listing.reviews}});
  }
});

module.exports = mongoose.model("Listing", listingSchema);
