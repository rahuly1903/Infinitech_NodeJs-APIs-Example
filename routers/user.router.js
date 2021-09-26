// const { Router } = require("express");

const express = require("express");

const Router = express.Router();

const userController = require("../controllers/user.controller");

Router.get("/users", userController.findAll);
Router.post("/users", userController.create);

module.exports = Router;
