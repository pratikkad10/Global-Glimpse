const Listing =require('../models/listing');  //listing model

exports.listing= async (req, res)=>{
    try {
        let {id}=req.params;
        let post= await Listing.findById(id).populate("reviews");
        res.render('listings/show.ejs', {post});
    } catch (error) {
        res.send("Error in DB");
    }
}