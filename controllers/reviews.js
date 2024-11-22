const Listing=require('../models/listing');
const Review=require('../models/reviews');

const {listingSchema, reviewSchema}=require('../schema');

exports.reviews=async (req,res)=>{
    try {
        // Validate the request body using Joi
        // const { error } = reviewSchema.validate(req.body);
        // if (error) {
        //     // If validation fails, throw an error
        //     throw new Error(error.details[0].message);
        // }


        let {id}=req.params;
        let {review, comments}=req.body;

        let listing=await Listing.findById(id);

        let newReview=new Review({rating:review, comments});
        listing.reviews.push(newReview);
    
        await newReview.save();
        await listing.save();
    
        res.redirect(`/listings/${id}`);
        // res.redirect(`/listings/${id}`);        

    } catch (error) {
        console.log(error);
        
        res.send("something Went Wrong!!");
    }
}