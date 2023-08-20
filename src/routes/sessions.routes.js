const Router = require("express");

const SessionsController = require("../controllers/SessionsController");

const sessionsController = new SessionsController();

const sessionRoute = Router();

sessionRoute.post("/", sessionsController.create);

module.exports = sessionRoute;
