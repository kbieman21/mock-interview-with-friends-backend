const Questions = require("../models/Questions");

async function getAllQuestions(req, res) {
  try {
    //to filter the Questions
    const question = await Questions.find({  });
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {getAllQuestions};