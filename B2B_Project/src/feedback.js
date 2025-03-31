import express from 'express';
import Review from './models/Review'; // Assuming a Review model is defined

const router = express.Router();

// Submit a Review
router.post('/feedback', async (req, res) => {
    const { businessId, rating, comment } = req.body;
    const newReview = new Review({ businessId, rating, comment });
    await newReview.save();
    res.status(201).json({ message: 'Review submitted successfully' });
});

// Get Reviews for a Business
router.get('/feedback/:businessId', async (req, res) => {
    const reviews = await Review.find({ businessId: req.params.businessId });
    res.json(reviews);
});

export default router;
