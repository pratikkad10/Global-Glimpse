const express=require('express');
const router=express.Router();

const {newPost, newlisting}= require("../controllers/newPost");
const {listings}= require("../controllers/listings");
const {listing} = require('../controllers/listing');
const {editForm,editlisting}=require('../controllers/edit');
const {deletelisting}=require('../controllers/delete');
const {reviews}=require('../controllers/reviews');
const {deleteReview}=require('../controllers/deleteReview');


router.post('/listings/new', newPost);
router.get('/listing/new',  newlisting);
router.get('/listings/:id/edit',  editForm);
router.put('/listings/:id',  editlisting);
router.post('/listings/:id/reviews', reviews);
router.get('/listings', listings);
router.get('/listings/:id', listing);
router.delete('/listings/:id', deletelisting);
router.delete('/listings/:id/reviews/:reviewId', deleteReview);


module.exports = router;