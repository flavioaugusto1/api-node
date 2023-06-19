const { Router } = require("express")
const userRoutes = Router()

userRoutes.post("/", (request, response) => {
  const { email,  password } = request.body
  response.json({ email,  password })
})

module.exports = userRoutes