const Listing =require('../models/listing');  //listing model

//route handler
exports.listings=async (req,res)=>{
    try {
       const listings=await Listing.find({})
        // res.status(200).json({
        //     success:true,
        //     data:post,
        //     message:"Posts fetched successfully!"
        // });
        res.render("listings/index.ejs", {listings});
        
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Posts not Fetched!"
        });
    }
}
