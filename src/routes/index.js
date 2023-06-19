const { Router } = require("express")
const userRoutes = require("./user.routes")
const route = Router()

route.use("/user", userRoutes)

module.exports = route