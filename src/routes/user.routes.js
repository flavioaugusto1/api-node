const { Router } = require("express")
const UsersController = require("../controllers/UsersControllers")

const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const userRoutes = Router()

const usersController = new UsersController()

userRoutes.post("/create", usersController.create)
userRoutes.put("/update", ensureAuthenticated, usersController.update)

module.exports = userRoutes