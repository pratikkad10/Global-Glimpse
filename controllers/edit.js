const Listing =require('../models/listing');  //listing model

exports.editForm=async(req, res)=>{
    let {id}=req.params;
    try {
        let listing=await Listing.findById(id);
        res.render('listings/edit.ejs', {listing});
    } catch (error) {
        res.send("Error occured!");
    }
}

//handler for put request
exports.editlisting=async(req,res)=>{
    let {id}=req.params;
    try {
        let { title, description,image, price, location, country }= req.body;
        let post=await Listing.findByIdAndUpdate(id, { title, description,image, price, location, country });
        res.redirect(`/listings/${id}`);
    } catch (error) {
        res.send("Error occured in DB!")
    }
}