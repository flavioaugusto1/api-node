const { Router } = require("express")

const userRouter = require("./user.routes")

const notesRouter = require("./notes.routes")

const tagsRouter = require("./tags.routes")

const sessionRouter = require("./sessions.routes")


const routes = Router()

routes.use("/user", userRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)
routes.use("/session", sessionRouter)


module.exports = routes