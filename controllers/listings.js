const Listing =require('../models/listing');  //listing model

//route handler
exports.listings=async (req,res)=>{
    try {
       const listings=await Listing.find({})
        res.render("listings/index.ejs", {listings}); 
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Posts not Fetched!"
        });
    }
}
