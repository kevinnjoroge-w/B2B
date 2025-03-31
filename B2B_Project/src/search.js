import express from 'express';
import Business from './models/Business'; // Assuming a Business model is defined

const router = express.Router();

// Search Businesses
router.get('/search', async (req, res) => {
    const { query } = req.query;
    const results = await Business.find({ name: { $regex: query, $options: 'i' } });
    res.json(results);
});

export default router;
