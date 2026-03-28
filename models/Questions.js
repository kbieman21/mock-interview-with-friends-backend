import mongoose from 'mongoose'; 

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  questionType: {
    type: String,
    enum: ['technical', 'behavioral'],
    default: 'technical'
  },
  answer: {
    type: String,
  },
});

export const Question = mongoose.model("Question", QuestionSchema);