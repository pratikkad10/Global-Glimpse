const Listing =require('../models/listing');  //listing model

exports.deletelisting=async (req,res)=>{
    let {id}=req.params;
    try {
        let post=await Listing.findByIdAndDelete(id);
        res.redirect('/listings');
    } catch (error) {
        res.send("Error occured in DB!")
    }
}