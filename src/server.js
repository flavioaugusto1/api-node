const express = require("express")
const route = require("./routes")
const app = express()

app.use(express.json())
app.use(route)

const port = 3000
app.listen(port, console.log(`Server is running on port ${port}`))