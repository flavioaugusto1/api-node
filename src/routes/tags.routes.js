const { Router } = require("express")
const TagsController = require("../controllers/TagsControllers")

const ensureAuthenticated = require("../middleware/ensureAuthenticated")

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get("/index", ensureAuthenticated, tagsController.index)

module.exports = tagsRoutes