const express=require('express');
const router=express.Router();

const {newPost, newlisting}= require("../controllers/newPost");
const {listings}= require("../controllers/listings");
const {listing} = require('../controllers/listing');
const {editForm,editlisting}=require('../controllers/edit');
const {deletelisting}=require('../controllers/delete');
const {reviews}=require('../controllers/reviews');
const {deleteReview}=require('../controllers/deleteReview');
const {isLoggedIn}=require('../middleware/login');

router.post('/listings/new',isLoggedIn, newPost);
router.get('/listing/new',isLoggedIn,  newlisting);
router.get('/listings/:id/edit',isLoggedIn,  editForm);
router.put('/listings/:id',isLoggedIn,  editlisting);
router.post('/listings/:id/reviews',isLoggedIn, reviews);
router.get('/listings',isLoggedIn, listings);
router.get('/listings/:id',isLoggedIn, listing);
router.delete('/listings/:id',isLoggedIn, deletelisting);
router.delete('/listings/:id/reviews/:reviewId',isLoggedIn, deleteReview);


module.exports = router;