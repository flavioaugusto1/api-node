const express = require("express")
const app = express()
app.use(express.json())

app.post("/products", (request, response) => {
  const { id, name } = request.body

  response.json({ id, name })
})

app.get("/users", (request, response) => {
  const { page, limit } = request.query

  response.json({ page, limit })
})

const port = 3000
app.listen(port, console.log(`Server is running on port ${port}`))