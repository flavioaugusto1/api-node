const { Router } = require("express")
const UsersControllers = require("../controllers/UsersControllers")

const userRoutes = Router()
const userControllers = new UsersControllers()

userRoutes.post("/", userControllers.create)

module.exports = userRoutes