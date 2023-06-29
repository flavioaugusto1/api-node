const { Router } = require("express")
const UsersController = require("../controllers/UsersControllers")

const userRoutes = Router()

const usersController = new UsersController()

userRoutes.post("/create", usersController.create)
userRoutes.put("/update/:id", usersController.update)

module.exports = userRoutes