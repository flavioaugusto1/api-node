const { Router } = require("express")
const userRouter = require("./user.routes")
const routes = Router()

routes.use("/create", userRouter)

module.exports = routes