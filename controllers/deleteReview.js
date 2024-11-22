const Listing =require('../models/listing');
const Review=require('../models/reviews');

exports.deleteReview=async (req,res)=>{
    let {id, reviewId}=req.params;
    try {
        await Listing.findByIdAndUpdate(id, {$pull: {reviews:reviewId}});
        await Review.findByIdAndDelete(reviewId);
        res.redirect(`/listings/${id}`);
    } catch (error) {
        res.send("Error occured in DB!")
    }
}