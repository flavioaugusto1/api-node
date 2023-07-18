const { Router } = require("express")

const userRouter = require("./user.routes")

const notesRouter = require("./notes.routes")

const routes = Router()

routes.use("/user", userRouter)
routes.use("/notes", notesRouter)


module.exports = routes