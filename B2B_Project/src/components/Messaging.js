import React, { useState } from 'react';
import axios from 'axios';

const Messaging = ({ userId }) => {
    const [receiverId, setReceiverId] = useState('');
    const [content, setContent] = useState('');

    const handleSendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages', { senderId: userId, receiverId, content });
        alert('Message sent successfully');
    };

    return (
        <form onSubmit={handleSendMessage}>
            <input
                type="text"
                placeholder="Receiver ID"
                value={receiverId}
                onChange={(e) => setReceiverId(e.target.value)}
                required
            />
            <textarea
                placeholder="Message"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Send Message</button>
        </form>
    );
};

export default Messaging;
