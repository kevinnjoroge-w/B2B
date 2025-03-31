import React, { useState } from 'react';
import axios from 'axios';

const Feedback = ({ businessId }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/feedback', { businessId, rating, comment });
        alert('Feedback submitted successfully');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Rating (1-5)"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
                min="1"
                max="5"
            />
            <textarea
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
            />
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default Feedback;
