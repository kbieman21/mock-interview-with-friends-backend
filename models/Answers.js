import mongoose from 'mongoose'; 

const answerSchema = new mongoose.Schema({
user_id: {
type: mongoose.Schema.Types.ObjectId,
ref: 'User'
},
question_id: {
type: mongoose.Schema.Types.ObjectId,
ref: 'Question'
},
answer: {
type: String,
trim: true
}
});