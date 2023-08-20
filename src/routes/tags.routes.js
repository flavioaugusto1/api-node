const { Router } = require("express")
const TagsController = require("../controllers/TagsControllers")

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get("/index/:user_id", tagsController.index)

module.exports = tagsRoutes