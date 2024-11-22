const Listing =require('../models/listing');  //listing model

//joi validation
//joi import
const {listingSchema, reviewSchema}=require('../schema');
//route handler
exports.newPost=async (req,res)=>{
    
    try {
        // Validate the request body using Joi
        const { error } = listingSchema.validate(req.body);
        if (error) {
            // If validation fails, throw an error
            throw new Error(error.details[0].message);
        }
        
        let { title, description,image, price, location, country }= req.body;
        const newListing= await Listing.create({ title, description,image, price, location, country });
        res.redirect("/listings");
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}


exports.newlisting=(req,res)=>{
    res.render("listings/new.ejs");
};