const Questions = require("../models/Questions");

async function getAllQuestions(req, res) {
  try {
    //to filter the Questions
    const question = await Questions.find({  });
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });//server side error
  }
}

async function getQuestionById(req, res) {
    try{
        const questionById = await Questions.findById(req.params.id);
        res.json(questionById);

        if(!questionById) {
          // the server successfully received the request but cannot locate the requested resource
          res.status(404).json({error: "Question not found"}); 
        }

    }catch(error) {
        console.log(error);
        res.status(500).json({error: error.message})//server side error
    }

}

module.exports = {getAllQuestions, getQuestionById};