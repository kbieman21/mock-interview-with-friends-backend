const express= require("express")
const {getAllQuestions,  getQuestionById, searchByKeyword, adminAddQuestion,adminEditQuestion, adminDeleteQuestion} from ""

// Router
const questionRouter = express.Router()

// GET route to get all question api/question
questionRouter.get("/question", getAllQuestions)
// GET route to get a question by id api/question/:id
questionRouter.get("question/:id", getQuestionById)
// GET route to search the database by a keyword api/question/:searchKeyword
// 👉 It conflicts because Express treats /question/:id and /question/:searchKeyword as the same route pattern, so only the first one will run.
// questionRouter.get("/question/:searchKeyword", searchByKeyword)
questionRouter.get("/search/:keyword", searchByKeyword)


// POST route for ADMIN to add a question api/question/ [ this path will only be access by ADMIN USER ]
questionRouter.post("/question", adminAddQuestion)
// PUT route for ADMIN to edit a question api/question/:id [ this path will only be access by ADMIN USER ]
questionRouter.put("/question/:id", adminEditQuestion)
// DELETE route for ADMIN to delete a question 'api/question/:id` [ this path will only be access by ADMIN USER ]
questionRouter.delete("/question/:id", adminDeleteQuestion)

module.exports = questionRouter;