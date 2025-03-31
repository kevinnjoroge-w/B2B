import express from 'express';
import mongoose from 'mongoose';
import { userAuthRouter } from './userAuth';
import searchRouter from './search';
import feedbackRouter from './feedback';
import messagingRouter from './messaging';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', userAuthRouter);
app.use('/api', searchRouter);
app.use('/api', feedbackRouter);
app.use('/api', messagingRouter);

mongoose.connect('mongodb://localhost:27017/b2b_project', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch(err => console.error(err));
