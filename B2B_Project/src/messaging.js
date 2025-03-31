import express from 'express';
import Message from './models/Message'; // Assuming a Message model is defined

const router = express.Router();

// Send a Message
router.post('/messages', async (req, res) => {
    const { senderId, receiverId, content } = req.body;
    const newMessage = new Message({ senderId, receiverId, content });
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully' });
});

// Get Messages between Users
router.get('/messages/:userId', async (req, res) => {
    const messages = await Message.find({
        $or: [
            { senderId: req.params.userId },
            { receiverId: req.params.userId }
        ]
    });
    res.json(messages);
});

export default router;
