const mongoose = require('mongoose') ;

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


const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;