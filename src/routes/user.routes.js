const { Router, json } = require("express");

const multer = require("multer");
const uploadConfig = require("../configs/upload")

const UsersController = require("../controllers/UsersControllers");

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const upload = multer(upload);

const userRoutes = Router(uploadConfig.MULTER);

const usersController = new UsersController();

userRoutes.post("/create", usersController.create);
userRoutes.put("/update", ensureAuthenticated, usersController.update);
userRoutes.patch("/avatar", ensureAuthenticated, (request, response) => {
  console.log(request.file.filename);
  response,json()
});

module.exports = userRoutes;
