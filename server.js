import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Set up all variables in the .env file
dotenv.config();

// Database connection
mongoose.connect(process.env.MONGODB_URI)
.then(console.log('Successfully connect to DB'))
.catch(err => console.log('Failed to connect to DB', err)
)


const PORT = process.env.PORT || 3000;

const app = express();


// ========= Middlewares =================
app.use(morgan('dev')); // logger
app.use(express.json()); // body parser

// ========= Routes ======================
//import userRoutes from './routes/userRoutes.js';

//app.use('/api/user', userRoutes);

// Use this route to setup the API documentation
// app.get('/', (req, res) => {
//     res.send('Welcome to my API!');
// });

app.get('/questions', (req, res) => {
    res.send('Here are all the questions');
});

app.get('/questions/:id', (req, res) => {
    const questionId = req.params.id;
    res.send(`Here is the question with ID: ${questionId}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});