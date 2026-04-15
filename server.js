const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors"); //open the door for localhost:5173(frontend)
const dotenv = require('dotenv') //from 'dotenv';

const questionRoutes = require('./routes/questionRoutes.js');

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

app.get('/', (req, res) => {
    res.send('Here are users');
});

app.get('/answers', (req, res) => {
    res.send('Here are answers');
});

app.use('/api/questions', questionRoutes);


// app.get('/questions/:id', (req, res) => {
//     const questionId = req.params.id;
//     res.send(`Here is the question with ID: ${questionId}`);
// });


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});

// NOTES

// server.js
// ├─ app.use(express.json())          ← Middleware (global)
// ├─ app.use(morgan('dev'))           ← Middleware (global)
// ├─ app.use('/api/questions', ...)   ← Mount router (only this!)
// └─ app.listen(...)

// questionRoutes.js
// ├─ router.get("/", getAllQuestions)           ← Define routes here
// ├─ router.get("/:id", getQuestionById)
// ├─ router.post("/", adminAddQuestion)
// ├─ router.put("/:id", adminEditQuestion)
// └─ router.delete("/:id", adminDeleteQuestion)

// questionController.js
// ├─ getAllQuestions = (req, res) => { ... }   ← Logic here
// ├─ getQuestionById = (req, res) => { ... }
// ├─ adminAddQuestion = (req, res) => { ... }
// └─ ... (all controller functions)