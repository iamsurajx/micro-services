const express = require("express");

const routes = express.Router();


const userController = require("../controller/user.controller");
const productController = require("../controller/product.controller");

routes.route('/signup')
  .post(userController.userInsert)
  .get(userController.userView)

routes.route('/signup/:id')
  .get(userController.userSingleView)


module.exports = routes;

